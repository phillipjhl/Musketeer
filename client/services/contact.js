import * as baseService from './base';

function sendContactEmail(name, email, message, subject = "") {
    return baseService.post('/api/contact', {
        name,
        email,
        message,
        subject
    });
}

export { sendContactEmail };