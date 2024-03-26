const siteRouter = require('./site');
const firmHotRouter = require('./firm');
const searchRouter = require('./search')


function route(app) {

    app.use('/', siteRouter);

    app.use('/phim', firmHotRouter);


    app.use('/search',searchRouter)


}

module.exports = route;
