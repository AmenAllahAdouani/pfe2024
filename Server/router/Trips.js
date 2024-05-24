const express = require('express');
const router = express.Router();

const Trips = require('../controller/Trips');

 
router.post('/trips', Trips.createTrip);
router.patch('/update/:id', Trips.updateTrip);
router.get('/trips/:id', Trips.getTrip);
router.get('/', Trips.getAllTrips);
router.get('/:userId', Trips.getTripByUserID);
router.delete('/:id', Trips.deleteTrip);
module.exports = router;
