import nodemailer from 'nodemailer';
import Logger from 'js-logger';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

async function mail(from: string = '"STET Web Portal" <no-reply@stet.gov.in>', to: string, subject: string, message: string) {
  Logger.debug(from, to, subject);
  try {
    let info = await transporter.sendMail({
      from, to, subject, html: message
    });
    Logger.debug("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (err) {
    return err;
  }
}

export default mail;
