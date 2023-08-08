const express = require("express");
const { addUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/", addUser);
router.get("/", (req, res) => {
  return "Hello";
});

module.exports = router;
