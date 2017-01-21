import nodemailer from 'nodemailer';

export default class MailSender {
    constructor(args) {
        this.transporter = nodemailer.createTransport(`smtps://${args.username}%40gmail.com:${args.password}@smtp.gmail.com`);
        this.mailOptions = {
            from    : `"${args.username}" <${args.username}@gmail.com>`,
            to      : args.to,
            subject : args.subject,
            text    : args.text
        };
    }

    send() {
        return new Promise((res, rej) => {
            this.transporter.sendMail(this.mailOptions, (error, info) => {
                if (error) {
                    rej(error);
                    return;
                }
                res(info.response);
            });
        });
    }
}
