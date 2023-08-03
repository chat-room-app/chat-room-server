const express = require("express");
const router = express.Router();

// import controllers
const { getTest, addRoom } = require("../controllers/room.controller");

// import middlewares

// api routes
router.post("/rooms", addRoom);

module.exports = router;
