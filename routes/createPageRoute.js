const express = require("express");

const createPageController = require("./../controller/createpageController");
const router = express.Router();

router.route("/createBlog").get(createPageController.createPage);
module.exports = router;
