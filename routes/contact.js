var express = require("express");
var router = express.Router();
var contactController = require("../controllers/contact");

/* GET about page. */
router.get("/", contactController.contact);
/* Send post request. */
router.post("/", contactController.contact);

module.exports = router;
