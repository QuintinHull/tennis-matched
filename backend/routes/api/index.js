const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const groupsRouter = require("./group.js");
const locationsRouter = require("./location.js");
const membersRouter = require("./member.js");
const skillsRouter = require("./skill.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/groups", groupsRouter);

router.use("/locations", locationsRouter);

router.use("/members", membersRouter);

router.use("/skills", skillsRouter);

module.exports = router;
