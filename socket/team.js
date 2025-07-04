module.exports = (io, socket) => {
    socket.on("join-team", (teamId) => {
      socket.join(teamId);
      console.log(`👥 Socket ${socket.id} joined team ${teamId}`);
    });
  };