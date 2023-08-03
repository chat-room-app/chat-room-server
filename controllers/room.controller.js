const { postRoom } = require('../services/room.service');
const { roomService } = require('../services');

const getTest = async (req, res) => {
  res.status(200).json({
    message: "Test API is working",
  });
};

const addRoom = async( req, res) => {
    const room = await roomService.postRoom(req.body.name);
    return res.status(201).json(room);
}

module.exports = {
  getTest,
  addRoom
};
