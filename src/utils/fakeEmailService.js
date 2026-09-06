

const m = require('nodemailer');

m.createTransport(
    {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 543,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }

    }
).sendMail({
    from: `theelitedigitalservices@gmail.com`,
    to: []
})

