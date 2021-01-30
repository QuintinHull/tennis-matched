const express = require("express");
const asyncHandler = require("express-async-handler");
const { Association } = require("sequelize/types");
const { User, Group, Group_User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const members = await Group_User.findAll({
      where: { groupId: req.params.id },
    });
    console.log("-------->", members);
    return res.json(members);
  })
);

module.exports = router;
