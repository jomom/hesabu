const express = require('express');
const router = express.Router();

const authController = require("../controllers/auth")

router.post('/auth/register', authController.register);
router.post('/auth/signin' , authController.signin)

//exports
module.exports = router
 