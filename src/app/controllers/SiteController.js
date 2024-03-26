const FirmUpdate = require('../models/FirmUpdate');
const Account = require('../models/Accounts')
const { muntipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const FirmHot = require('../models/FirmHot');


class SiteController {
    async index(req, res, next) {
        try {
            const acc = req.session.acc;
            const home = await FirmUpdate.find({
                pages: (req.params.pages = 1),
            });
            const firmhot = await FirmHot.find({});
            res.render('home', {
                home: muntipleMongooseToObject(home),
                firmhot: muntipleMongooseToObject(firmhot),
                acc 
            });
        } catch (error) {
            next(error);
        }
    }

    updata(req,res,next){
        res.render('firmHot/updata')
    }


    login(req,res,next){
        res.render('firmHot/login');
    }

    store(req, res, next) {
        const formDate = req.body;
        formDate.avata = `https://res.cloudinary.com/dsxkwbfyq/image/upload/v1710926474/avatar-facebook-mac-dinh-14_a4dhcr.jpg`
        formDate.success = true
        const acc = new Account(formDate);
        acc
            .save()
            .then(() => res.redirect('/login'))
            .catch(next);
    }

    async loginSuccess(req, res, next) {
        try {
          const acc = await Account.findOne({ userName: req.query.userName, passWord: req.query.passWord });
      
          if (acc) {
            req.session.acc = acc; // Lưu thông tin tài khoản vào session
            res.redirect('/');
          } else {
            res.redirect('/login');
          }
        } catch (error) {
          next(error);
        }
      }
    
    logout(req,res,next){
        req.session.destroy((err) => {
            res.redirect('/');
          });
    }

    edit(req,res,next){
        Account.findById(req.params.id)
            .then(acc => res.render('firmHot/edit',{
                acc : mongooseToObject(acc)
            }))
            .catch(next)
    }

    update(req,res,next){
        Account.updateOne({ _id : req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }
    
}

module.exports = new SiteController();
