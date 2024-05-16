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

    static async deleteDestination(req, res) {
        try {
            const deletedDestination = await DestinationModel.findByIdAndDelete(req.params.id);
            if (!deletedDestination) {
                return res.status(404).json({ message: 'Destination not found' });
            }
            res.status(200).json({ message: 'Destination deleted successfully' });
        } catch (error) {
            console.error('Error deleting destination:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getDestination(_req, res) {
        try { 
            const destinations = await DestinationModel.find();
            res.status(200).json(destinations);
        } catch (error) {
            console.error('Error fetching hosts:', error);
            res.status(400).json({ message: error.message });
        }
    }
    
}
module.exports = Destination;