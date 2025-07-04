module.exports = (io, socket) => {
    socket.on("delete-feedback", (feedbackId) => {
      console.log("📥 New feedback received");
  
      if (feedback.team) {
        io.to(feedback.team).emit("delete-feedback", feedback);
      } else {
        io.emit("delete-feedback", feedback);
      }
    });
  };
  