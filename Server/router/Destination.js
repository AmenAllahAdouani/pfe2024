const express = require('express');
const router = express.Router();

const Destination = require('../controller/Destination');

// Define a route to handle POST and GET requests to create a new Destination 
router.post('/Destination', Destination.createDestination);
module.exports = router;