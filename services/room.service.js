const ChatRoom = require("../models/room.model");

const postRoom = async (name) => {
  const existingChatRoom = await ChatRoom.findOne({ name });
  if (existingChatRoom) {
    return res
      .status(409)
      .json({ error: "Chat room with the same name already exists." });
  }

  const newChatRoom = new ChatRoom({ name });
  await newChatRoom.save();
  return newChatRoom;
};

const getAllRooms = async () => {
  const rooms = await ChatRoom.find({});
  return rooms;
}

const getRoomById = async (id) => {
  const room = await ChatRoom.findById(id);
  return room;
}

module.exports = {
  postRoom,
  getAllRooms,
  getRoomById
};
