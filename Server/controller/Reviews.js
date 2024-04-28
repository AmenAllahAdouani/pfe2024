const ReviewsModel = require('../model/Reviews');
const express = require('express');
class Reviews {
    static async createReview(req, res) {
        try {
            // Create a new review document based on the request body
            const newReview = new ReviewsModel(req.body);
            
            // Save the new review to the database
            const savedReview = await newReview.save();
            
            // Respond with the saved review
            res.status(201).json(savedReview.id);
        } catch (error) {
            // If an error occurs, respond with an error status and message
            res.status(400).json({ message: error.message });
        }
    }

    static async updateReview(req, res) {
        const { id } = req.params;
        try {
            // Find the review by ID and update with the provided data
            // The { new: true } option ensures that the method returns the updated document
            const updatedReview = await ReviewsModel.findByIdAndUpdate(id, req.body, { new: true });
    
            if (!updatedReview) {
                return res.status(404).json({ message: "Review not found" });
            }
    
            res.status(200).json(updatedReview);
        } catch (error) {
            console.error('Error updating review:', error);
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = Reviews;