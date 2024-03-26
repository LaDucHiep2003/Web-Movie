const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/HH3D', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('xxxx');
    } catch (erro) {
        console.log('ffff');
    }
}

module.exports = { connect };
