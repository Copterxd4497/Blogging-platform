const express = require("express");

const homepageController = require("./../controller/homepageController");
const explorePageController = require("./../controller/explorePageController");

const router = express.Router();

router.route("/").get(homepageController.homepage);
router.route("/explore/:topic").get(explorePageController.explorePage);

module.exports = router;
