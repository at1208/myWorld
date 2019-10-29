const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./Config/db');


const User = require('./Model/userModel')



const AuthRoute = require('./Routes/authRoutes')





app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use('/', AuthRoute)


mongoose.connect(config.db)
.then(() => console.log(`MongoDB Connected`))
.catch( err => console.log(`Failed to connect ${err}`))

const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}`));
