"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Skills",
      [
        {
          level: 1.5,
          description:
            "You have limited experience and are working primarily on getting the ball in play.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 2.0,
          description:
            "You lack court experience and your strokes need developing.  You are familiar with the basic positions for singles and doubles play.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 2.5,
          description:
            "You are learning to judge where the ball is going, although your court coverage is limited.  You can sustain a short rally of slow pace with other players of the same ability.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 3.0,
          description:
            "You are fairly consistent when hitting medium-paced shots, but are not comfortable with all strokes and lack execution when trying for directional control, depth, or power. Your most common doubles formation is one-up, one-back.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 3.5,
          description:
            "You have achieved improved stroke dependability with directional control on moderate shots, but need to develop depth and variety. You exhibit more aggressive net play, have improved court coverage and are developing teamwork in doubles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 4.0,
          description:
            "You have dependable strokes, including directional control and depth on both forehand and backhand sides on moderate-paced shots.  You can use lobs, overheads, approach shots and volleys with some success and occasionally force errors when serving. Rallies may be lost due to impatience. Teamwork in doubles is evident.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 4.5,
          description:
            "You have developed your use of power and spin and can handle pace. You have sound footwork, can control depth of shots, and attempt to vary game plan according to your opponents.  You can hit first serves with power and accuracy and place the second serve.  You tend to overhit on difficult shots. Aggressive net play is common in doubles.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 5.0,
          description:
            "You have good shot anticipation and frequently have an outstanding shot or attribute around which a game may be structured.  You can regularly hit winners or force errors off of short balls and can put away volleys.  You can successfully execute lobs, drop shots, half volleys, overhead smashes, and have good depth and spin on most second serves.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 5.5,
          description:
            "You have mastered power and/or consistency as a major weapon. You can vary strategies and styles of play in a competitive situation and hit dependable shots in a stress situation.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 6.0,
          description:
            "You have had intensive training for national tournament competition at the junior and collegiate levels and have obtained a sectional and/or national ranking.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: 7.0,
          description: "You are a world-class player.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Skills", null, {});
  },
};
