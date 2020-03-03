const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

require('./config/database');

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations');
const ticketsRouter = require('./routes/tickets');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
})


app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);
app.use('/', ticketsRouter);

module.exports = app;