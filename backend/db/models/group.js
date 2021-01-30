"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      creatorId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
    },
    {}
  );
  Group.associate = function (models) {
    Group.belongsTo(models.Location, { foreignKey: "locationId" });
    Group.belongsTo(models.User, { foreignKey: "creatorId" });
    Group.belongsToMany(models.User, {
      through: "Group_User",
      otherKey: "userId",
      foreignKey: "groupId",
    });
  };
  return Group;
};
