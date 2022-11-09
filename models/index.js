const comment = require('./comment');
const post = require('./post');
const user = require('./user');

user.hasMany(post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


Post.hasMany(comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});


post.belongsTo(user, {
  foreignKey: 'user_id',
});

comment.belongsTo(user, {
  foreignKey: 'user_id',
});


module.exports = { user, comment, post };