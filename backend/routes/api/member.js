const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Group, Group_User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const members = await Group_User.findAll({
      where: { groupId: req.params.id },
      include: [User],
      order: [["createdAt", "DESC"]],
    });
    return res.json(members);
  })
);

router.post(
  "/",
  asyncHandler(async function (req, res) {
    const { userId, groupId } = req.body;
    const newMember = await Group_User.create({
      userId,
      groupId,
    });
    res.json({ newMember });
  })
);

module.exports = router;
