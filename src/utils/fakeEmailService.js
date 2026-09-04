
const mail = require('nodemailer')


const main = async () => {

    mail.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure:false
    })

}