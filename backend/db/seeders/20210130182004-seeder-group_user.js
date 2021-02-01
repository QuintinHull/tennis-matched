"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Group_Users",
      [
        {
          userId: 4,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Group_Users", null, {});
  },
};
