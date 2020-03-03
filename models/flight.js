const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['ATX', 'DAL', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
        default: function() {
            const date = new Date();
            const year = date.getFullYear();
            const newDate = date.setFullYear(year);
            return newDate;
        }
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']	
    },
    flightNo: {
        type: Number,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const year = date.getFullYear() + 1;
            const newDate = date.setFullYear(year);
            return newDate;
        }
    },
    airport: {
        type: String,
        enum: ['ATX', 'DAL', 'LAX', 'SAN']
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);