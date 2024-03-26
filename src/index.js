const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
var Handlebars = require('handlebars');
const methodOverride = require('method-override')

const route = require('./routes');
const db = require('./config/db');
var session = require('express-session');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
// Connect DB
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(session({
    secret: '1111',
    resave: false,
    saveUninitialized: false
}));
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum:(a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
Handlebars.registerHelper('range', require('handlebars-helper-range'));
//

// Route Init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
