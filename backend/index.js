const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/db');

//create express app
const app = express();

//database connection
dbConnection();

//cors
app.use( cors() );

//public folder
app.use( express.static( 'public' ) );

//lecture and parse body
app.use( express.json() );

//route handler
app.use('/api/cities', require('./routes/cities'));
app.use('/api/flights', require('./routes/flights'));
app.use('/api/business', require('./routes/business'));
app.use('/api/services', require('./routes/services'));

app.use('/api/seed', require('./routes/seed'));

//listen for requests
app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is up on port ${process.env.PORT || 3000}`);
})