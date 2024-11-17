const db = require('../config/dbConnection');
const createUserTable = require('../models/userModel') ;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async (req , res) => {
    const {email , username , password , role } = req.body;
    try{
      createUserTable() ;
    }catch{
       return  res.status(400).json({message: "Error in creating user"});   
    }
}

