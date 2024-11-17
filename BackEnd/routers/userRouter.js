const express = require('express');
const router = express.Router();
const {createUser} = require("../controllers/userController.js");
const {verifyUserDetails} = require("../config/verifyUserDetails.js");

router.post('/',verifyUserDetails,createUser);

module.exports = router;
