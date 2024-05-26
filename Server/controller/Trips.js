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
        const trip = await TripsModel.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        res.status(200).json(trip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// New method to get all trips
static async getAllTrips(_req, res) {
    try { 
        const trips = await TripsModel.find();
        res.status(200).json(trips);
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(400).json({ message: error.message });
    }
}

static async getTripByUserID(req, res) {
    try {
        const userId = req.params.userId;

        const trips = await TripsModel.find({ UserID: userId });

        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: "Trips not found for this user" });
        }

        res.status(200).json(trips);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

static async deleteTrip(req, res) {
    try {
        const deletedTrip = await TripsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Trip deleted successfully' });
    } catch (error) {
        console.error('Error deleting trip:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

}
module.exports = Trips;

