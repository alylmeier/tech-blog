const User = require('./User');
const Project = require('./Project');
const Comment = require('./comment');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Project, {
  foreignKey: 'project_id',
});

// Comment.belongsTo(User, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// }); 

Project.hasMany(Comment, {
  foreignKey: 'project_id',
});

module.exports = { User, Project, Comment };
