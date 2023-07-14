import nodemailer from "nodemailer";

const handler = async (event) => {
  
  const {name, email, phone, street, city, state, zip, cancer, date, therapy, published, createdAt} = event.body
  const user = "madeline.hartlage37@gmail.com"
  const data = {
    name, phone, street, city, state, zip, cancer, date, therapy, createdAt,
  }
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
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html:`
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Address: ${street}</p>
          <p> ${city}</p>
          <p> ${state}</p>
          <p> ${zip}</p>
          <p>Cancer Type: ${cancer}</p>
          <p>Diagnosis Date: ${date}</p>
          <p>Future Therapies: ${therapy}</p>
          <p>Created at: ${createdAt}</p>
      `,
    });

    console.log("Message sent:", mail.messageId)

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "sucess", message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
