const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model as well
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message', // This establishes the relationship with the Message model
  }],
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;