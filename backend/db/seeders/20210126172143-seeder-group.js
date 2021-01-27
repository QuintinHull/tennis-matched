"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          name: "Clay Misérables",
          description:
            "We are a group of old-timers who prefer the slower pace and forgiving surface of clay courts. We play most weekend afternoons.",
          creatorId: 4,
          locationId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Full Metal Racquets",
          description:
            "We are a group of young bucks who love to play fast and swing hard. We typically play on the grass courts, but sometimes we play on hard courts.",
          creatorId: 3,
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Queens of the Court",
          description:
            "We are a group of highly competitive ladies who play some serious tennis. We play every morning on the weekends and on most week nights",
          creatorId: 9,
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};
