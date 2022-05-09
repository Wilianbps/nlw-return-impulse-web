import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8764be4065eeb9",
    pass: "55f409247c46bb",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Wilian Brito <wilianbpk@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}

/* [
    `<div style="font-family:sans-serif; font-size:16px; color:#111">`,
    `<p>Tipo do Feedback: ${type}</p>`,
    `<p>Comentário: ${comment}</p>`,
    `</div>`,
  ].join("\n"), */
