const User = require("../models/user.model");

const postUser = async (username) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return existingUser;
    }
  
    const newUser = new User({ username });
    await newUser.save();
    return newUser;
  }; 

module.exports = {
  postUser
};
