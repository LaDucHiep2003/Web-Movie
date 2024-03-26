const express = require('express');
const router = express.Router();

const firmHotController = require('../app/controllers/Firms');

router.get('/create', firmHotController.create);
router.post('/store', firmHotController.store);
router.get('/:slug/:newEp', firmHotController.watch);
router.get('/:slug', firmHotController.show);
router.get('/comment/:id',firmHotController.commentSucses)


module.exports = router;
