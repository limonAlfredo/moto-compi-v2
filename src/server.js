// MODULES
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// INITIALIZATIONS
const app = express();

// SETINGS
app.set('port',process.env.PORT||8080);
app.set('views',path.join(__dirname,'views'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// MIDDLEWARES
app.use(express.urlencoded({extended:false}));

// ROUTES
app.use(require('./routes/index.routes'));
app.use(require('./routes/contacto.routes'));
app.use(require('./routes/admin.routes'));

// STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;