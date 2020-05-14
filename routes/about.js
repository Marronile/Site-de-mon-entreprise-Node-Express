/**
 * @file About routes
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

// Required modules
var express = require("express");
var router = express.Router();
var aboutController = require("../controllers/about");

/* GET about page. */
router.get("/", aboutController.about);

module.exports = router;
