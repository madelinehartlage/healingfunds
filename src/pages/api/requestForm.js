import nodemailer from "nodemailer";

export default async function RequestForm(req, res) {
    const {name, email, phone, street, city, state, zip, cancer, date, therapy} = req.body

    const user = "madeline.hartlage37@gmail.com"

    const data = {
        name, phone, street, city, state, zip, cancer, date, therapy
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
            `,
        });

        console.log("Message sent:", mail.messageId)
        return res.status(200).json({message: "success"});
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Could not send the email.",});
    }

    
}