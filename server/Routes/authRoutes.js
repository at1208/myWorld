const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
var jwt = require('jsonwebtoken');


const user = mongoose.model('User')

router.post('/signup', async (req,res) => {

  const User = await user.findOne({ username: req.body.username })
  if(User){
    return res.status(400).send('User is already registered')
  } else {
    const newUser = new user({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
      })

      const result = await newUser.save()
      const token =  await jwt.sign({ username: newUser.username }, "jwtPrivateKey")

      res.header("x-auth", token).redirect('/me')
  }
})


router.post('/login', async (req,res) => {

 const User = await user.findOne({ username: req.body.username})
 if(!User){
  return res.status(400).send('Invalid username or password')
} else{
 if(User.password === req.body.password){
   const token =  await jwt.sign({ username: User.username }, "jwtPrivateKey")

   res.header("x-auth", token).send('Login successful')

 }
 return res.status(400).send('Invalid username or password')
}
    res.send(User)


})
module.exports = router;
