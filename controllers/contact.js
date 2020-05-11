var mailer = require("../services/mailer.services");

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
      " <br> <br> <u></u>Message:</uAuthor:>  <br> " +
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
