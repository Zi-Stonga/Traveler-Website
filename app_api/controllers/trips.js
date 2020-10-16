const mongoose = require('mongoose');
const model = mongoose.model('trips');

//Get /trips - lists all the trips
const tripsList = asynch (req, res) => {
    model
    .find({}) //empty filter for all
    .exec((err,trips) => {
        if (!trips) {
            return res
            .statue(404)
            .json({ "message": "trip not found" });
        } else if (err) {
            return res
                .status(404)
                .json(err);
        } else {
            return res
            .status(200)
            .json(trips);


        }
    });
};

//GET: /trips/:trpCode -  returns a single trip
const tripsFindCode = asynch (req, res) => {
    model
    .find({ 'code': req.params.tripCode})
    .exec((err,trip) => {
        if (!trip) {
            return res
            .statue(404)
            .json({ "message": "trip not found" });
        } else if (err) {
            return res
                .status(404)
                .json(err);
        } else {
            return res
            .status(200)
            .json(trip);
        }
    });
};

module.exports = {
    tripsList,
    tripsFindCode
};