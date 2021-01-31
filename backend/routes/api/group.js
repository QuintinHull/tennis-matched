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

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const { name, description, creatorId, locationId } = req.body;
    const updatedGroup = await Group.update(
      {
        name,
        description,
        creatorId,
        locationId,
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.json({ updatedGroup });
  })
);

module.exports = router;
