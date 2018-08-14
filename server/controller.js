module.exports = {
    createWord: ( req, res ) => {
        const { words } = req.body
    },
    readUser: (req, res) => {
        if(!req.session.user){
            res.json(null);
            return;
        }
        req.app.get('db').read_user(req.session.user.auth0_id).then(users => {
            res.json(users[0]);
        }).catch(error => {
                console.log('error*************', error);
                res.json({ message: 'Server error' });
        });
    },
    readWords: (req, res) => {

    }
}


