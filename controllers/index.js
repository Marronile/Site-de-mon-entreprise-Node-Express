/**
 * @file Home page controller
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

exports.index = (req, res, next) => {
  res.render("index", { title: "Accueil" });
};
