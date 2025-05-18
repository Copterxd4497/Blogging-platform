const express = require("express");
const textController = require("./../controllers/textController");
const router = express.Router();

router.route("/").get(textController.showPage);

module.exports = router;
