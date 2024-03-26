const mongoose = require('mongoose');

const Schema = mongoose.Schema;




const Account = new Schema(
    {
        userName : {type : String},
        passWord : {type : String},
        success : {type : Boolean},
        avata : {type : String},
        maxim : {type : String},
        dateTime : {type :Date},
        accountName : {type : String},
        email : {type : String},
        
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('account_users', Account);
