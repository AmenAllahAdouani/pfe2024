const express = require('express');
const router = express.Router();
const Reviews = require('../controller/Reviews');

// Define a route to handle POST requests to create a new review 
router.post('/reviews', Reviews.createReview);
router.patch('/update/:id', Reviews.updateReview);
module.exports = router;