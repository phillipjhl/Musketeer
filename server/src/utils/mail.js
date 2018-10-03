import mailgunLoader from 'mailgun-js';
import { config } from '../config';

const key = config.MAILGUN_API_KEY;

let mailgun = mailgunLoader({ apiKey: key, domain: 'sandbox30ead791de16465d97ccaa9b713e6005.mailgun.org' });

function sendEmail(to, from, subject, content) {
    let data ={
        from,
        to,
        subject,
        html: content
    };
    //returns a promise
    return mailgun.messages().send(data);
}

export { sendEmail };