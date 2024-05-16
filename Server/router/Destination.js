const express = require('express');
const router = express.Router();

const Destination = require('../controller/Destination');


router.post('/', Destination.createDestination);
router.get('/', Destination.getDestination);
router.delete('/:id', Destination.deleteDestination);
module.exports = router;