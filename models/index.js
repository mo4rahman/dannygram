// This is requiring in the connection that's linking to my Mongo Atlas
// require('../config/db.connection')

module.exports = {
  Post: require("./Post"),
  Comment: require("./Comment"),
};
