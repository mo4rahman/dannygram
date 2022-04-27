// This is connecting the models, which connects to the db, into the controllers
// require('../models')

module.exports = {
  posts: require("./posts_controller"),
  comments: require("./comments_controller"),
};
