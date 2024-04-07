const express = require('express');
const router = express.Router();
const UsersModel = require('../model/Users'); // Assuming your model file is in the same directory

// Define a route to handle POST requests to create a new user
router.post('/users', async (req, res) => {
    try {
        // Create a new user document based on the request body
        const newUser = new UsersModel(req.body);
        
        // Save the new user to the database
        const savedUser = await newUser.save();
        
        // Respond with the saved user
        res.status(201).json(savedUser);
    } catch (error) {
        // If an error occurs, respond with an error status and message
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
