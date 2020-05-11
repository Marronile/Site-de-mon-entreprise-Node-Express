var express = require("express");
var router = express.Router();
var servicesController = require("../controllers/services");

/* GET services page. */
router.get("/", servicesController.services);

module.exports = router;
