const TripsModel = require('../model/Trips');
const express = require('express');
class Trips {
static async createTrip(req, res) {
    try {
        // Create a new trip document based on the request body
        const newTrip = new TripsModel(req.body);
        
        // Save the new trip to the database
        const savedTrip = await newTrip.save();
        
        // Respond with the saved trip
        res.status(201).json(savedTrip.id);
    } catch (error) {
        // If an error occurs, respond with an error status and message
        res.status(400).json({ message: error.message });
    }
}

static async updateTrip(req, res) {
    const { id } = req.params;
    try {
        // Find the trip by ID and update with the provided data
        // The { new: true } option ensures that the method returns the updated document
        const updatedTrip = await TripsModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTrip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        res.status(200).json(updatedTrip);
    } catch (error) {
        console.error('Error updating trip:', error);
        res.status(400).json({ message: error.message });
    }
}

static async getTrip(req, res) {
    try {
        // Retrieve a trip document by ID from the database
        const trip = await TripsModel.findById(req.params.id);

        if (!trip) {
            // If no trip is found, send a 404 Not Found response
            return res.status(404).json({ message: "Trip not found" });
        }

        // Respond with the retrieved trip
        res.status(200).json(trip);
    } catch (error) {
        // If an error occurs, respond with a 400 Bad Request status and message
        res.status(400).json({ message: error.message });
    }
}

}
module.exports = Trips;
