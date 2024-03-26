const express = require('express');
const router = express.Router();

const firmHotController = require('../app/controllers/Firms');

router.get('/', firmHotController.search);

module.exports = router;