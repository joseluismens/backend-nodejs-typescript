import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "eduardo.a.arcep@gmail.com", // generated ethereal user
      pass: "dktlvndmggkqznav", // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('ready for send emails')
  })