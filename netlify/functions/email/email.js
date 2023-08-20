const  nodemailer = require("nodemailer");

const handler = async (event) => {
  console.log(event.body);
  const body = JSON.parse(event.body)
  console.log(body.name)
  const user = "madeline.hartlage37@gmail.com"
 
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: "blvyrvdoxylapcyd",
    },

  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "eaglekeeper37@gmail.com",
      replyTo: body.email,
      subject: `Contact form submission from ${body.name}`,
      html:`
          <p>Name: ${body.name}</p>
          <p>Email: ${body.email}</p>
          <p>Phone: ${body.value}</p>
          <p>Address: ${body.street}</p>
          <p> ${body.city}</p>
          <p> ${body.state}</p>
          <p> ${body.zip}</p>
          <p>Cancer Type: ${body.cancer}</p>
          <p>Diagnosis Date: ${body.date}</p>
          <p>Future Therapies: ${body.therapy}</p>
          <p>Created at: ${body.createdAt}</p>
      `,
    });

    console.log("Message sent:", mail.messageId)

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
