const { roomService, userService } = require('../services');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');


// const addUser = catchAsync(async( req, res) => {
//     const room = await roomService.postRoom(req.body.name);
//     if(!room) throw new ApiError(httpStatus.BAD_REQUEST, "Room can't be created");
//     return res.status(201).json(room);
// })

const addUser = catchAsync(async( req, res) => {
    const user = await userService.postUser(req.body.username);
    if(!user) throw new ApiError(httpStatus.BAD_REQUEST, "User can't be created");
    return res.status(201).json(user);
})


module.exports = {
    addUser
  };