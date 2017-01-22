import Base       from '../Base';
import MailSender from '../../MailSender.js';
import config     from '../../../etc/config.json';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                email : ['required', 'email'],
                text  : ['required', {'max_length': 1500}]
            }}]
        };

        return this.validator.validate(params, rules);
    }

    async execute({data}) {
        const mailSender = new MailSender({
            username : config.mail.username,
            password : config.mail.password,
            to : config.mail.username + '@gmail.com',
            subject : 'Feedback',
            text : data.email + data.text
        });

        const res = await mailSender.send();

        return {data: res};
    }
}
