"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          description: "Singles. One set max",
          date: "03/06/21",
          time: "12:00am",
          place: "Owl Creek Municipal Tennis Center",
          creatorId: 4,
          groupId: 1,
          skillId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Just looking to hit it around",
          date: "03/15/21",
          time: "10:00am",
          place: "Virginia Beach Tennis & Country Club",
          creatorId: 5,
          groupId: 1,
          skillId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Singles",
          date: "03/20/21",
          time: "4:00pm",
          place: "Owl Creek Municipal Tennis Center",
          creatorId: 5,
          groupId: 1,
          skillId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Doubles match. Looking for two more player.",
          date: "03/20/21",
          time: "12:00pm",
          place: "Owl Creek Municipal Tennis Center",
          creatorId: 4,
          groupId: 1,
          skillId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Singles. Full match",
          date: "04/01/21",
          time: "1:00pm",
          place: "Northside Park Tennis",
          creatorId: 8,
          groupId: 1,
          skillId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Doubles. Just for fun",
          date: "04/20/21",
          time: "10:00am",
          place: "Tidewater Tennis Center",
          creatorId: 8,
          groupId: 1,
          skillId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Canadian doubles. Looking for two players to face.",
          date: "04/22/21",
          time: "2:00pm",
          place: "Virginia Beach Tennis & Country Club",
          creatorId: 4,
          groupId: 1,
          skillId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Singles",
          date: "05/05/21",
          time: "11:00am",
          place: "Virginia Beach Tennis & Country Club",
          creatorId: 5,
          groupId: 1,
          skillId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};