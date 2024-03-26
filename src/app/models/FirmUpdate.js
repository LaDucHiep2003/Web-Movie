const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const FirmUpdate = new Schema(
    {
        name: { type: String, maxLength: 255 },
        image: { type: String },
        // imageId : {type : String},
        nameOther: { type: String },
        listCate: { type: String },
        newEp: { type: Number },
        infoMore: { type: Number },
        rate: { type: String },
        textContent: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        pages: { type: String },
        backgound: { type: String },
        tap : [
            {
            e: {type : Number},
            v : {type : String},
            }
        ],
        comment : [
            {
                userName : {type : String},
                avata : {type : String},
                cmt : {type : String},
            }
        ]

    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('new_update_firms', FirmUpdate);
