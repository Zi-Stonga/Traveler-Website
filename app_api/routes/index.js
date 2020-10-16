const express = require('express');
const router = express.Router();

const tripsController = require('../controller/trips');
//trips request to pass to the controller
router
    .route('/trips')
    .get(tripsController.tripsList);

    router
    .router('/trips/:tripCode')
    .get(tripsController.tripsFindCode);
    

    module.exports = router;