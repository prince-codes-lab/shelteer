const path = require('path');
require('dotenv').config(
    {
        path: path.join(__dirname, '../.env')
    }
);
const mailer = require('nodemailer');
console.log(`${__dirname}`);
const html = `


<h1>

Hello World

</h1>
<p>
Is'nt Nodemailer useful?</p>

`
//wzns zfsv wtex qawf
async function main(){
    const emailOPtions = {
        from: process.env.EMAIL_USER,
        to: [`theelitedigitalservices@gmail.com`, 
            `chiboyitzprince28@gmail.com`],
        subject: 'Shelteer Email Verification',
        text: 'Verify your email address by clicking the link below:',
        html: html
    }

     mailer.createTransport({
            //    service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465, // for port 587, use secure: false
                secure: true,
                auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
               }
            }).sendMail(emailOPtions, (err, info) => {
                if(err){
                    console.log(err)
                }else{
                    console.log(info)
                }
            })





}

main().catch(console.error)
// const transporter = mailer.createTransport(
//     {
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     }
// )