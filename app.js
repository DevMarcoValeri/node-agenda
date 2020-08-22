const path = require('path');

const express = require('express');

const app = express();

// Set template  engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import routes
const homeRoute = require('./routes/admin');

// Import static file from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);

app.listen(5000);