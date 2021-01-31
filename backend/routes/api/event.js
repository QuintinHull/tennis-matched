const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Group, Skill, Event } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const events = await Event.findAll({ include: [Skill, User, Group] });
    console.log("--------->", events);
    return res.json(events);
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const members = await Event.findAll({
      where: { groupId: req.params.id },
      include: [Skill, User, Group],
    });
    return res.json(members);
  })
);

module.exports = router;
