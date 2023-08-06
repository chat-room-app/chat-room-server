const ChatRoom = require("../models/room.model");

const postRoom = async (name, userId) => {
  const existingChatRoom = await ChatRoom.findOne({ name });
  if (existingChatRoom) {
    return res
      .status(409)
      .json({ error: "Chat room with the same name already exists." });
  }

  const newChatRoom = new ChatRoom({ name });
  if (userId) newChatRoom.members.push(userId);
  await newChatRoom.save();
  return newChatRoom;
};

const getAllRooms = async () => {
  const rooms = await ChatRoom.find({});
  return rooms;
};

const getRoomById = async (id) => {
  const room = await ChatRoom.findById(id);
  return room;
};

const joinChatRoom = async (chatRoomId, userId) => {
  return await ChatRoom.findByIdAndUpdate(chatRoomId, {
    $addToSet: { members: userId },
  });
};

const getAllRoomsByUserId = async (userId) => {
  console.log(userId);
  const chatRooms = await ChatRoom.find({ members: { $in: [userId] } }).populate('members', 'username').populate('messages');;
  return chatRooms;
 
};

module.exports = {
  postRoom,
  getAllRooms,
  getRoomById,
  joinChatRoom,
  getAllRoomsByUserId,
};
