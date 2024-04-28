const express = require('express');
const router = express.Router();
const Reviews = require('../controller/Reviews');

// Define a route to handle POST requests to create a new review 
router.post('/reviews', Users.createReview);
router.patch('/update/:id', Users.updateReview);
module.exports = router;