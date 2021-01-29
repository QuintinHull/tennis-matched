const express = require("express");
const asyncHandler = require("express-async-handler");
const { Location } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const locations = await Location.findAll();
    return res.json(locations);
  })
);

module.exports = router;
