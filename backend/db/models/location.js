"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      city: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {}
  );
  Location.associate = function (models) {
    Location.hasMany(models.Group, { foreignKey: "locationId" });
  };
  return Location;
};
