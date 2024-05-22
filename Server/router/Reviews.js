const express = require('express');
const router = express.Router();
const Reviews = require('../controller/Reviews');

// Define a route to handle POST requests to create a new review 
router.post('/', Reviews.createReview);
router.patch('/:id', Reviews.updateReview);
router.get('/', Reviews.getAllReviews);

module.exports = router;