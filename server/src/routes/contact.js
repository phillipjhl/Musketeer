import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

router.post('/', (req, res) => {
    let messageBody = `Name: ${req.body.name}
                        Email: ${req.body.email}
                        Message: ${req.body.message}`;
    sendEmail('philliplangland@gmail.com', 'no-reply-blog@blog.com', 'Contacting You', messageBody)
    .then(response => {
        res.sendStatus(201);
    })
    .catch(err => {
        next(err);
    });
});

export default router;