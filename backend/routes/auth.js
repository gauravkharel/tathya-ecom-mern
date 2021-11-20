const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    registerUser
    // loginUser,
    // getAllUsers,
    // getUser,
    // updateUser,
    // deleteUser
} = require('../controllers/userController');

router.route('/register').post(registerUser);

module.exports = router;


