const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { messageService } = require("../services");
const io = require("..");

// const addUser = catchAsync(async( req, res) => {
//     const room = await roomService.postRoom(req.body.name);
//     if(!room) throw new ApiError(httpStatus.BAD_REQUEST, "Room can't be created");
//     return res.status(201).json(room);
// })

const sendMessage = catchAsync(async (req, res) => {
  const { chatRoomId, senderId, content } = req.body;
  const message = await messageService.postMessage(
    chatRoomId,
    senderId,
    content,
    req.io
  );
  return res.status(201).json(message);
});

const getMessagesByRoomId = catchAsync(async (req, res) => {
  const { chatRoomId } = req.params;
  const messages = await messageService.getMessagesOfRoom(chatRoomId);
  res.status(200).json(messages);
});

const markAsRead = catchAsync(async (req, res) => {
  const { id } = req.params;
  const message = await messageService.putMessage(id, req.body.userId);
  res.json(message);
});

module.exports = {
  sendMessage,
  getMessagesByRoomId,
  markAsRead,
};
