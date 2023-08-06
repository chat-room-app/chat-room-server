const Message = require("../models/message.model");
const ChatRoom = require("../models/room.model");

const postMessage = async (chatRoomId, senderId, content) => {
  const message = await Message.create({
    chatRoom: chatRoomId,
    sender: senderId,
    content,
  });
  await ChatRoom.findByIdAndUpdate(chatRoomId, {
    $push: { messages: message._id },
  });
  return message.populate(
    "sender",
    "username"
  );
};

const getMessagesOfRoom = async (chatRoomId) => {
  const messages = await Message.find({ chatRoom: chatRoomId }).populate(
    "sender",
    "username"
  );
  return messages;
};

const putMessage = async (id, userId) => {
  const message = await Message.findByIdAndUpdate(
    id,
    { $addToSet: { readBy: userId } },
    { new: true }
  );
  return message;
};

module.exports = {
  postMessage,
  getMessagesOfRoom,
  putMessage,
};
