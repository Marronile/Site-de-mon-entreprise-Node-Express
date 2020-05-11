var express = require("express");
var router = express.Router();
var aboutController = require("../controllers/about");


/* GET about page. */
router.get("/", aboutController.about);

module.exports = router;
