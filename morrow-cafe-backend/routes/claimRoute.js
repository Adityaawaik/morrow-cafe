const express = require("express");
const claimRoute = express.Router();
const claimController = require("../controllers/claimController");

claimRoute.post("/api/claim", claimController.claimOffer);

module.exports = claimRoute;
