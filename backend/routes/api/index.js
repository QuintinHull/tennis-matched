const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const groupsRouter = require("./group.js");
const locationsRouter = require("./location.js");
const membersRouter = require("./member.js");
const skillsRouter = require("./skill.js");
const eventsRouter = require("./event.js");
const commentsRouter = require("./comment.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/groups", groupsRouter);

router.use("/locations", locationsRouter);

router.use("/members", membersRouter);

router.use("/skills", skillsRouter);

router.use("/events", eventsRouter);

router.use("/comments", commentsRouter);

module.exports = router;
