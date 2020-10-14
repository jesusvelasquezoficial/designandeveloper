const { Router } = require("express");
var nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async(req, res) => {
  try {
    const { name, email, servicio, mensaje } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   auth: {
    //     user: "cecelia.ruecker42@ethereal.email",
    //     pass: "8cSCjd8xYmGzqFJFHz",
    //   },
    // });

    var mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MAIL_USER,
      subject: "Enviado desde nodemailer",
      html: `Nombre: ${name} <br>
            Email: ${email} <br>
            Servicio: ${servicio} <br>
            Mensaje: <br>  - ${mensaje}`,
      // html: `<h5>Design&Developer</h5>`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(JSON.stringify(mailOptions));

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send("recibido");
    // res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("No recibido");
  }
});

module.exports = router;