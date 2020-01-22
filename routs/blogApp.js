const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
const blogAppDB = require('../model/blogAppDB')

router.post('/user', (req, res) => {
    const data = {
        id: req.body.id,
        user_name: req.body.user_name,
        email_address: req.body.email_address,
        password: req.body.password
    }
    const postedData = blogAppDB.signUp(data);
    postedData.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

module.exports = router;