const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
const blogAppDB = require('../model/blogAppDB')

router.post('/signUp', (req, res) => {
    const data = {
        "user_name": req.body.user_name,
        "email_address": req.body.email_address,
        "password": req.body.password
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