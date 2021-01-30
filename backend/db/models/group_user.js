'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group_User = sequelize.define('Group_User', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Group_User.associate = function(models) {
    // associations can be defined here
  };
  return Group_User;
};