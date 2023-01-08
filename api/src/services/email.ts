import nodemailer from "nodemailer";

interface MailOptions {
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (options: MailOptions): Promise<any> => {
  const transporter = nodemailer.createTransport({
    host: String(process.env.EMAIL_HOST),
    port: Number(process.env.EMAIL_PORT),
    // secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Tom Blaymire <hello@cryptotrack.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("Error sending email:", err);
  }
};
