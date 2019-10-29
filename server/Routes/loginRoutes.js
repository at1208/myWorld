const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()

const user = mongoose.model('User')

router.post('/', async (req,res) => {
     const newUser = new user({
       name: req.body.name,
       username: req.body.username,
       password: req.body.password
     })

     const result = await newUser.save()
     res.send(result)
})

module.exports = router;
