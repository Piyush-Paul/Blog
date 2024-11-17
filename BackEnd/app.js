const express = require('express');
const bodyParser = require("body-parser");
const user = require('./routers/userRouter') ;
const app = express();

const cors = require('cors') ;
app.use(cors()) ;
app.use(express.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/',user) ;
module.exports = app ;
