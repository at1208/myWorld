const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')



const loginRoute = require('./Routes/loginRouteS')





app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use('/login', loginRoute)



const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}`));
