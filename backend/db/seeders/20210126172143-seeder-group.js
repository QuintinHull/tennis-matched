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
          locationId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ace-Holes",
          description:
            "We are a group of highly competitive ladies who play some serious tennis. We play every morning on the weekends and on most week nights",
          creatorId: 9,
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Lob-yists",
          description:
            "We play after work with out spouses. Always looking for more members!",
          creatorId: 7,
          locationId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Called To Serve",
          description:
            "Our group is made up of military veterans, but anyone is welcome to join. We play on the weekends!",
          creatorId: 2,
          locationId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Penn Pals",
          description:
            "We are a group of beginners, who enjoy learning tennis around others. We play every morning on the weekends and on most week nights",
          creatorId: 10,
          locationId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hall of Framers",
          description:
            "We are a group of highly competitive players who played in college. We play every other night.",
          creatorId: 9,
          locationId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Racquet Scientists",
          description:
            "Our group is mostly made up of friends from work, but feel free to join. We play on the 1st and 15th of every month.",
          creatorId: 8,
          locationId: 1,
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
