const path = require('path');

const express = require('express');

const app = express();

// Connect to the database
const db = require('./util/database');

// Import routes
const adminRoute = require('./routes/admin');

// Set body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Set template  engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import static file from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);

app.listen(5000);