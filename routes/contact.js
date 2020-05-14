/**
 * @file Contact routes
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

var express = require("express");
var router = express.Router();
var contactController = require("../controllers/contact");

/* GET contact page. */
router.get("/", contactController.contact);
/* Send post request. */
router.post("/", contactController.contact);

module.exports = router;
