const express = require('express');
const router = express.Router();

const Host = require('../controller/Hosts');


router.post('/', Host.createHost);
router.put('/:id', Host.updateHost);
router.get('/', Host.getAllHosts);
router.delete('/:id', Host.deleteHost);

module.exports = router;