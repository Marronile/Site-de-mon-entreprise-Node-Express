/**
 * @file About page controller
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

exports.about = (req, res, next) => {
  res.render("about", { title: "A propos de Marronile" });
};
