const express = require('express');

const router = express.Router();

const { getUserById, getUser } = require('../controllers/userController');
const {
  isAdmin,
  isSignIn,
  isAuthenticate,
} = require('../controllers/authController');

router.param('userId', getUserById);

router.get('/user/:userId', isSignIn, isAuthenticate, getUser);

module.exports = router;
