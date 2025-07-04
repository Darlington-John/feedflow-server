// socket/feedback.js
module.exports = (io, socket) => {
    socket.on("new-feedback", (feedback) => {
      console.log("📥 New feedback received");
  
      if (feedback.team) {
        io.to(feedback.team).emit("new-feedback", feedback);
      } else {
        io.emit("new-feedback", feedback);
      }
    });
  };
  