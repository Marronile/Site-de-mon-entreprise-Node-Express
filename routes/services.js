/**
 * @file Services routes
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

//Services routes
var express = require("express");
var router = express.Router();
var servicesController = require("../controllers/services");

/* GET services page. */
router.get("/", servicesController.services);

module.exports = router;
