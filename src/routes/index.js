const siteRouter = require('./site');
const firmHotRouter = require('./firm');
const pagesRouter = require('./pages');
const searchRouter = require('./search')


function route(app) {

    app.use('/', siteRouter);

    app.use('/phim', firmHotRouter);

    app.use('/page', pagesRouter);

    app.use('/search',searchRouter)


}

module.exports = route;
