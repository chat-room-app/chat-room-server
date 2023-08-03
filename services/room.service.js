const ChatRoom = require("../models/room.model");

const postRoom = async (name) => {
  try {
    const existingChatRoom = await ChatRoom.findOne({ name });
    if (existingChatRoom) {
      return res
        .status(409)
        .json({ error: "Chat room with the same name already exists." });
    }

    const newChatRoom = new ChatRoom({ name });
    await newChatRoom.save();
    return newChatRoom;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postRoom,
};
