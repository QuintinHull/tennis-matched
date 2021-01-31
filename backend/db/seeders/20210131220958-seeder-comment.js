"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          message: "This sounds fun! I'll be there.",
          eventId: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "I can make this as well. Cant wait!",
          eventId: 7,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "I'm in! See you there.",
          eventId: 5,
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Works for me. Game on!",
          eventId: 1,
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Okay, cool. I can bring my friend too.",
          eventId: 4,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message:
            "Count me in. Virginia Beach Tennis Club are my favorite courts!",
          eventId: 8,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "I'm game. Bring your A game",
          eventId: 3,
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message:
            "I'll play if I can find a doubles partner by then. I will let you know.",
          eventId: 6,
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
