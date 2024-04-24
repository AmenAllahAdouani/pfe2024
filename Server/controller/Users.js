const UsersModel = require('../model/Users');
const express = require('express');
class Users {
static async createUser(req, res) {
    try {
        // Create a new user document based on the request body
        const newUser = new UsersModel(req.body);
        
        // Save the new user to the database
        const savedUser = await newUser.save();
        
        // Respond with the saved user
        res.status(201).json(savedUser.id);
    } catch (error) {
        // If an error occurs, respond with an error status and message
        res.status(400).json({ message: error.message });
    }
}
static async updateUser(req, res) {
    const { id } = req.params;
    try {
        // Find the user by ID and update with the provided data
        // The { new: true } option ensures that the method returns the updated document
        const updatedUser = await UsersModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Directly return the updated user data
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(400).json({ message: error.message });
    }
}
}
module.exports = Users;
