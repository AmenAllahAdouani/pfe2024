const DestinationModel = require('../model/Destination');
const express = require('express');
class Destination {
    static async createDestination(req, res) {
        try {
            // Create a new Destination document
            const newDestination = new DestinationModel(req.body);
            
            // Save the new Destination to the database
            const savedDestination = await newDestination.save();
            
            // Respond with the saved Destination
            res.status(201).json(savedDestination.id);
        } catch (error) {
            // If an error occurs, respond with an error status and message
            res.status(400).json({ message: error.message });
        }
    }
}
module.exports = Destination;