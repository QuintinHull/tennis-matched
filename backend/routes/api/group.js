const express = require("express");
const asyncHandler = require("express-async-handler");
const { Group } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const groups = await Group.findAll();
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

module.exports = router;
