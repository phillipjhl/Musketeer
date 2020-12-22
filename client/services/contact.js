import * as baseService from './base';
import * as amplify from './amplify-api';

function sendContactEmail(name, email, message, subject = "", api = "amplify") {
    if (api === "amplify") {
        return amplify.post('/contact', {
            name,
            email,
            message,
            subject
        })
    }
    else {
        return baseService.post('/api/contact', {
            name,
            email,
            message,
            subject
        });
    }
}

export { sendContactEmail };