/*jshint esversion: 6 */

const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname,  'views'));
app.engine('html', require('ejs').renderFile);
app.engine('css', require('ejs').renderFile);
app.set('view engine', 'ejs');

// midlewares



// routes
app.use(require('./routes/index'));

// static files (imagenes funtes, html css js etc)
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
