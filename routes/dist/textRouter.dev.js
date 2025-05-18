"use strict";

var express = require("express");

var textController = require("./../controllers/textController");

var router = express.Router();
router.route("/").get(textController.showPage);
module.exports = router;