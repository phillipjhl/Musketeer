const formData = require("form-data")
const Mailgun = require("mailgun.js")

// To Do:
// use templates and other configurations to build this further

const key = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN

const mailgun = new Mailgun(formData)
const client = mailgun.client({ username: "api", key: key })

function sendEmail(to, from, subject, content) {
    return client.messages.create(domain, {
        from: from,
        to: to,
        subject: subject,
        text: content,
    })
}

module.exports = { sendEmail }
