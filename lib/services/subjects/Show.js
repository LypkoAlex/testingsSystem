import Base            from '../Base';
import storage         from '../../storage';
import { dumpSubject } from '../utils';
import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {
            id: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        const subject = await storage.subjects.show(id);
        if (!subject) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        return {data : dumpSubject(subject)};
    }
}
