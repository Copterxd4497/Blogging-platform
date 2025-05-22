const express = require("express");

const homepageController = require("./../controller/homepageController");
const explorePageController = require("./../controller/explorePageController");
const searchController = require("./../controller/searchController");

const router = express.Router();

router.route("/").get(homepageController.homepage);
router.route("/blog/:content").get(homepageController.blogPage);
router.route("/explore/:topic").get(explorePageController.explorePage);
router.route("/search").get(searchController.searchPage);

module.exports = router;
