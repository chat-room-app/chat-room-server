const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;