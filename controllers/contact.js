/**
 * @file Contact page controller
 * @author Justin  Dah-kenangnon <dah.kenangnon@marronile.com>
 * @copyright Marronile 2020
 * @license MIT
 */

// Required modules
var mailer = require("../services/mailer.services");

//Controller
exports.contact = (req, res, next) => {
  //Response template
  var sendEmailResponse = {
    error: false,
    msg: "",
  };

  //If contact form is submitted
  if (
    (req.method == "POST") &
    (req.body.email != null) &
    (req.body.content != null)
  ) {
    //send the email
    var html =
      "<u>Author:</u> " +
      req.body.email +
      " <br> <br> <u>Message:</u><br> " +
      req.body.content;
    html += " Since " + new Date.toString();
    var author = req.body.email;

    if (
      mailer.Contactus({
        from: author,
        content: html,
      })
    ) {
      sendEmailResponse.error = false;
      sendEmailResponse.msg = "Merci de nous avoir contacté";
    } else {
      sendEmailResponse.error = true;
      sendEmailResponse.msg = "Oops! Une erreur est survenue.";
    }
  }

  //Render page
  res.render("contact", {
    title: "Contact-nous",
    sendEmailResponse: sendEmailResponse,
  });
};
