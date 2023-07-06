const express = require("express");
const router = express.Router();
const { testMessage } = require("../controllers/userController");

router.get("/test", testMessage);

module.exports = router;
