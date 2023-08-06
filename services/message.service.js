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

const putMessage = async (chatRoomId, userId) => {
  console.log(chatRoomId, userId)
  const messages = await Message.updateMany(
    {chatRoom: chatRoomId, readBy: {$ne: userId}},
    {$push: {readBy: userId}}
  )
  return messages;
};

module.exports = {
  postMessage,
  getMessagesOfRoom,
  putMessage,
};
