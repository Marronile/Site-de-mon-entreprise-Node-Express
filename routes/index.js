/**
 * @file Home routes
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

// Required modules
var express = require("express");
var router = express.Router();
var indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.index);

module.exports = router;
