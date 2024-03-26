const FirmUpdate = require('../models/FirmUpdate');
const { muntipleMongooseToObject } = require('../../util/mongoose');

class PagesController {
    async showPages(req, res, next) {
        try {
            const pages = await FirmUpdate.find({ pages: req.params.pages });
            res.render('firmHot/page', {
                pages: muntipleMongooseToObject(pages),
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PagesController();
