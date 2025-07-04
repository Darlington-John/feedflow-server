const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const registerSocketHandlers = require("./socket");

const app = express();
const server = http.createServer(app);
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

const io = new Server(server, {
  cors: {
    origin: "https://feedflow-gamma.vercel.app",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);
  registerSocketHandlers(io, socket); // call all event handlers here

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

app.locals.io = io;

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
