const express = require('express');
const router = express.Router();
const Subscriber = require('../controller/Subscriber');

router.post('/subscribe', Subscriber.subscribe);

module.exports = router;  