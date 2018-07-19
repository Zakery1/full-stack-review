const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const c = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyPaser.json());
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


const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
});