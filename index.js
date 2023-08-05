// import modules
const express = require("express");
const { json, urlencoded } = express;
const http = require("http");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();
//app2
// app
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// routes
const roomRoutes = require("./routes/room.routes");
app.use("/rooms", roomRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

// port
const port = process.env.PORT || 8080;

// Socket.io setup
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("sendMessage", (data) => {
    // Handle incoming messages and broadcast to the chat room
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// listener
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
