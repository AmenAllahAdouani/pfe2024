const express = require('express');
const router = express.Router();

const Trips = require('../controller/Trips');

// Define a route to handle POST requests to create a new trip 
router.post('/trips', Trips.createTrip);
router.patch('/update/:id', Trips.updateTrip);
module.exports = router;
