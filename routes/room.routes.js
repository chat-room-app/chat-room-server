const express = require("express");
const router = express.Router();

// import controllers
const { getTest, addRoom, getRooms, getRoomById } = require("../controllers/room.controller");

// import middlewares

// api routes
router.post("/", addRoom);
router.get("/", getRooms);
router.get("/:id", getRoomById);

module.exports = router;