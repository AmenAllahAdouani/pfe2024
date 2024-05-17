const express = require('express');
const router = express.Router();
const { createNewsletter, getAllNews, deleteNews, sendNews } = require('../controller/newsletterController');

router.post('/', createNewsletter);
router.get('/', getAllNews);
router.delete('/:id', deleteNews);
router.post('/:id', sendNews);

module.exports = router;
