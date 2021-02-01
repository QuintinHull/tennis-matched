const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Comment, Event } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.use(requireAuth);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
      where: { eventId: req.params.id },
      include: [User, Event],
    });
    res.json({ comments });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { message, eventId, userId } = req.body;
    const comment = await Comment.create({ message, eventId, userId });
    res.json({ comment });
  })
);

module.exports = router;
