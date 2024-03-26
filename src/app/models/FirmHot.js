const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const FirmHot = new Schema(
    {
        name: { type: String, maxLength: 255 },
        nameOther: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        backgound: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('firmHots', FirmHot);
