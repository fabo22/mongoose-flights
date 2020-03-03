const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mongoose-flights'), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

db.on('connected', function() {
    console.log(`connection established to mongodb on ${db.host}:${db.port}`);
})