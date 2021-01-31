"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group_User = sequelize.define(
    "Group_User",
    {
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
    },
    {}
  );
  Group_User.associate = function (models) {
    Group_User.belongsTo(models.Group, { foreignKey: "groupId" });
    Group_User.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Group_User;
};
