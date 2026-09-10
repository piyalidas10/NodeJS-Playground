const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const { renderSignUp, registerUser, renderLogin, validateLogin, logout } = require('../controllers/userAuthController');

router.use(bodyParser.urlencoded());

router.get('/sign-up',renderSignUp);

router.post('/sign-up', registerUser);

router.get('/login', renderLogin);

router.post('/login', validateLogin);

router.get('/logout', logout);

module.exports = router;