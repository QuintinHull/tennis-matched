const express = require("express");
const asyncHandler = require("express-async-handler");
const { Group, User, Location } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const groups = await Group.findAll({ include: [Location, User] });
    return res.json(groups);
  })
);

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const newGroup = await Group.create(req.body);
    return newGroup;
  })
);
//comment for commit
module.exports = router;
