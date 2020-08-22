const express = require('express');

const app = express();

// Set template  engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import routes
const homeRoute = require('./routes/admin');

app.use(homeRoute);

app.listen(5000);