var nodemailer = require("nodemailer");
var config = require("../config/default.json");

exports.Contactus = ({ from, content }) => {
  var mailSent = false;

  //Transporter
  var transporter = nodemailer.createTransport({
    service: config.CONTACT.OUR_EMAIL_SERVICE,
    auth: {
      user: config.CONTACT.OUR_EMAIL_ADRESS,
      pass: config.CONTACT.OUR_EMAIl_PASSWORD,
    },
  });

  // Mail options
  var mailOptions = {
    from: from,
    to: config.CONTACT.OUR_EMAIL_ADRESS,
    subject: "Message from Marronile.com",
    html: content,
  };

  //sending email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      mailSent = false;
    } else {
      console.log("Email sent: " + info.response);
      mailSent = true;
    }
  });
  return mailSent;
};
