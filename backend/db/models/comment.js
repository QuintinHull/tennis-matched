"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: DataTypes.STRING,
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.Event, { foreignKey: "eventId" });
    Comment.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Comment;
};
