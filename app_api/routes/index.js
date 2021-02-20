const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
//trips request to pass to the controller
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

    router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip);
    

    module.exports = router;