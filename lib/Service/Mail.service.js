import nodemailer from 'nodemailer'



const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
    //TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user:process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  
  export const SendEmail = async(name,password,email)=>{
    const info = await transporter.sendMail({
        from: 'gauravpande292002@gmail.com',
        to: email, 
        subject: "Forget Password", 
        html:`

        Hey,
        Your Credentials:-
        Name: ${name},
        Email:-${email}   
        Password:-${password}

        `, 
      });

      return info
  }