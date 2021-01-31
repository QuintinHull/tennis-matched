"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      description: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      place: DataTypes.STRING,
      creatorId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
    },
    {}
  );
  Event.associate = function (models) {
    Event.belongsTo(models.User, { foreignKey: "creatorId" });
    Event.belongsTo(models.Group, { foreignKey: "groupId" });
    Event.belongsTo(models.Skill, { foreignKey: "skillId" });
  };
  return Event;
};
