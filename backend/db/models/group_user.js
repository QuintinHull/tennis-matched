"use strict";

const user = require("./user");

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
    Group_User.belongsToMany(models.Group, { through: "Group_User" });
    Group_User.belongsToMany(models.User, { through: "Group_User" });
  };
  return Group_User;
};
