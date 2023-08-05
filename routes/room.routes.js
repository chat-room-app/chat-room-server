const express = require("express");
const router = express.Router();

// import controllers
const { getTest, addRoom, getRooms, getRoomById, joinChatRoom } = require("../controllers/room.controller");

// import middlewares

// api routes
router.post("/", addRoom);
router.get("/", getRooms);
router.get("/:id", getRoomById);
router.post("/:chatRoomId/join", joinChatRoom)

module.exports = router;