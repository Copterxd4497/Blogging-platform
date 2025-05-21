const express = require('express');

const homepageController = require('./../controller/homepageController');
const router = express.Router();

router.route('/').get(homepageController.homepage)

module.exports = router;