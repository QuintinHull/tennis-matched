const express = require("express");
const asyncHandler = require("express-async-handler");
const { Skill, Event } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const skills = await Skill.findAll();
    console.log("---------->", skills);
    return res.json(skills);
  })
);

module.exports = router;
