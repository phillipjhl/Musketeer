var mailgunLoader = require("mailgun-js");

// To Do:
// use templates and other configurations to build this further

const key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

let mailgun = mailgunLoader({ apiKey: key, domain: domain });

function sendEmail(to, from, subject, content) {
  let data = {
    from,
    to,
    subject,
    html: content
  };
  //returns a promise
  return mailgun.messages().send(data);
}

module.exports = { sendEmail };