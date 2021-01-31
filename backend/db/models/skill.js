"use strict";
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "Skill",
    {
      level: DataTypes.DECIMAL,
      description: DataTypes.STRING,
    },
    {}
  );
  Skill.associate = function (models) {
    Skill.hasMany(models.Event, { foreignKey: "skillId" });
  };
  return Skill;
};
