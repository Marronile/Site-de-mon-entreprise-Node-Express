/**
 * @file Services page controller
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

exports.services = (req, res, next) => {
  res.render("services", { title: "Nos services" });
};
