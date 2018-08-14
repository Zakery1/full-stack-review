const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const c = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}))



massive(process.env.CONNECTION_STRING).then(db => app.set('db', db),
console.log('database is connected'))
.catch(error => {
    console.log('Error connecting to massive', error)
})


app.get('/api/words', c.readWords);
app.post('/api/words', c.createWord);
app.get('/api/profile', c.readUser);
//auth/callback is same as auth0 project
app.get('/auth/callback', (req, res) => {               
    const payload = {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code', ///always the same
    redirect_uri: `http://${req.headers.host}/auth/callback`  //this http is refering to our server
    };
    function tradeCodeForAccessToken() {
        console.log(payload)
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
      }

      function exchangeAccessTokenForUserInfo(response) {
        const accessToken = response.data.access_token;
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`);
      }

      function storeUserInfoInDatabase(response) {
          const auth0Id = response.data.sub;
          const db = req.app.get('db')

        return db.read_user(auth0Id).then(users => {
            if (users.length) {
                const user = users[0];
                req.session.user = user;
                res.redirect('/profile');
            } else {
                const createUserData = [
                    auth0Id,
                    response.data.email,
                    response.data.name,
                    response.data.picture
                ];
                return db.create_user(auth0Id, response.data.email, response.data.name, response.data.picture).then(newUsers => {
                const user = newUsers[0];
                req.session.user = user;
                res.redirect('/profile');
            })
            }
        })
      }
      tradeCodeForAccessToken()
        .then(exchangeAccessTokenForUserInfo)
        .then(storeUserInfoInDatabase)
        .catch(error => {
            console.log('----------error', error);
            res.status(500).json({ message: "Server error" })
        });
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
});