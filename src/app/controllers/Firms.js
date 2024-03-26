const FirmUpdate = require('../models/FirmUpdate');
const { mongooseToObject } = require('../../util/mongoose');
const { muntipleMongooseToObject } = require('../../util/mongoose');



class FirmsController {
    show(req, res, next) {
        const slug = req.params.slug;
        
        const acc = req.session.acc;

        Promise.all([FirmUpdate.findOne({ slug })])
            .then(([firmupdate]) => {
                const comments = firmupdate.comment
                // res.json(firmupdate)
                res.render('firmHot/show', {
                    firmupdate: mongooseToObject(firmupdate),
                    comments : mongooseToObject(comments),
                    acc

                });
            })
            .catch(next);
    }

    watch(req, res, next) {
        const slug = req.params.slug;

        Promise.all([FirmUpdate.findOne({slug})])
            .then(([firmupdate]) => {
                const { tap } = firmupdate;
                const x = req.params.newEp
                const foundEpisode = tap.filter((episode) => episode.e == x);
                
                // res.json(foundEpisode[0])
                res.render('firmHot/watch', {
                    
                    foundEpisode : mongooseToObject(foundEpisode[0]),
                    firmupdate : mongooseToObject(firmupdate)
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('firmHot/create');
    }


    store(req, res, next) {
        const formDate = req.body;
        formDate.pages = `1`;
        const firmupdate = new FirmUpdate(formDate);
        // const cnt = FirmUpdate.countDocuments({pages : '1'})
        firmupdate
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    async search(req, res, next) {
        try {
            const search = await FirmUpdate.find({
                name: req.query.name
            });
            res.render('firmHot/search', {
                search: muntipleMongooseToObject(search),
            });
        } catch (error) {
            next(error);
        }
    }

    commentSucses(req,res,next){
        const acc = req.session.acc;
        res.body.avata = acc.avata
        res.body.userName = acc.userName
        FirmUpdate.updateOne({ _id : req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

  

}

module.exports = new FirmsController();
