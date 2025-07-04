const feedbackHandler = require("./feedback");
const teamHandler = require("./team");

module.exports = (io, socket) => {
  feedbackHandler(io, socket);
  teamHandler(io, socket);
};
