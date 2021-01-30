const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Group, Group_User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    // console.log("--------db-------->", db);
    const members = await Group_User.findAll({
      where: { groupId: req.params.id },
      include: [{ model: User }],
    });
    // console.log("-------->", members);
    return res.json(members);
  })
);

module.exports = router;
