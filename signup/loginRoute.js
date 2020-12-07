const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.post('/', (req, res) => {
    Users.findOne({ 'email': req.body.email }).then(user => {
        if(!user) {
            res.status(401);
            res.json("User not found");
        }
        else if(user.password !== req.body.password) {
            res.status(401);
            res.json("Password is incorrect");
        }
        else {
            res.status(200);
            res.json("User Found" + user + req.body.email);
        }
    })
    .catch(err => res.status(400).json(`Error:${err}`));
});

module.exports = router;
