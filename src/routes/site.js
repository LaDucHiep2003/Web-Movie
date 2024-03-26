const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.index);
router.get('/updata',siteController.updata)
router.get('/login',siteController.login)
router.get('/logout',siteController.logout)
router.post('/store',siteController.store)
router.get('/success',siteController.loginSuccess)
router.get('/my-account/:id',siteController.edit)
router.put('/my-account/:id',siteController.update)
module.exports = router;
