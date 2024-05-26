const express = require('express');
const router = express.Router();
const planController = require('../controller/Planning');

router.post('/savePlan', planController.savePlan);
router.get('/getPlan', planController.getPlan);

module.exports = router;
