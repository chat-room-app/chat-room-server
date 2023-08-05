const { postRoom } = require('../services/room.service');
const { roomService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const getTest = async (req, res) => {
  res.status(200).json({
    message: "Test API is working",
  });
};

const addRoom = catchAsync(async( req, res) => {
    const room = await roomService.postRoom(req.body.name);
    if(!room) throw new ApiError(httpStatus.BAD_REQUEST, "Room can't be created");
    return res.status(201).json(room);
})

const getRooms = catchAsync(async( req, res) => {
  const rooms = await roomService.getAllRooms();
  if(!rooms) throw new ApiError(httpStatus.BAD_REQUEST, "Rooms not found");
  return res.status(200).json(rooms);
})

const getRoomById = catchAsync(async( req, res) => {
  const rooms = await roomService.getRoomById(req.params.id);
  if(!rooms) throw new ApiError(httpStatus.BAD_REQUEST, "Rooms not found");
  return res.status(200).json(rooms);
})

module.exports = {
  getTest,
  addRoom,
  getRooms,
  getRoomById
};
