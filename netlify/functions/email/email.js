const  nodemailer = require("nodemailer");

const handler = async (event) => {
  console.log(event.body);
  const body = JSON.parse(event.body)
  const user = "madeline.hartlage37@gmail.com"
 
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: user,
        pass: "gdvfqhmvtigzrzkl",
    },

  });
/*
  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "eaglekeeper37@gmail.com",
      replyTo: body.email,
      subject: `Contact form submission from ${body.name}`,
      text:`
          Name: ${body.name}
          Email: ${body.email}
          Phone: ${body.value}
          Address: ${body.street}
           ${body.city}
           ${body.state}
           ${body.zip}
          Cancer Type: ${body.cancer}
          Diagnosis Date: ${body.date}
          Future Therapies: ${body.therapy}
          Created at: ${body.createdAt}
      `,
    });

    console.log("Message sent:", mail.messageId)
    */

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "eaglekeeper37@gmail.com",
      subject: "Hi",
      text: "test"
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", message: "Hello" }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
