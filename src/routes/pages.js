const express = require('express');
const router = express.Router();

const pageController = require('../app/controllers/pagesController');

router.get('/:pages', pageController.showPages);

module.exports = router;
