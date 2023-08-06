const express = require("express");
const { sendMessage, getMessagesByRoomId, markAsRead } = require("../controllers/message.controller");
const Message = require("../models/message.model");
const router = express.Router();

// import controllers


// import middlewares

// api routes
router.post("/", sendMessage);
router.get("/:chatRoomId", getMessagesByRoomId);
router.put("/", markAsRead);

module.exports = router;