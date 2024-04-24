const express = require('express');
const router = express.Router();

const Users = require('../controller/Users'); // Adjust the path as necessary

// Define a route to handle POST requests to create a new user
router.post('/users', Users.createUser);
router.patch('/update/:id', Users.updateUser);
module.exports = router;
