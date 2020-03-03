const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    show,
    create,
    new: newFlights,
    index
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {
                flight,
                tickets
            });
        })
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function newFlights(req, res) {
    var newFlight = new Flight();
    const dt = newFlight.departs;
    const destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
    res.render('flights/new', {destDate});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.redirect('flights/new');
    })
    res.redirect('/flights');
}