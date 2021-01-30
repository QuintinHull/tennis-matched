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

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const group = await Group.findByPk(req.params.id, {
      include: [Location, User],
    });
    console.log("<--------------------->", group);
    return res.json(group);
  })
);

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const { name, description, creatorId, locationId } = req.body;
    const newGroup = await Group.create({
      name,
      description,
      creatorId,
      locationId,
    });
    res.json({ newGroup });
  })
);

module.exports = router;
