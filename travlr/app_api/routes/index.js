const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip); // POST Method Adds a Trip

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);

module.exports = router;