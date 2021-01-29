const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const groupsRouter = require("./group.js");
const locationsRouter = require("./location.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/groups", groupsRouter);

router.use("/locations", locationsRouter);

module.exports = router;
