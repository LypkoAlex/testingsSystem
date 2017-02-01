import Base            from '../Base';
import storage         from '../../storage';
import { dumpSubject } from '../utils';
import X               from '../../Exception';

export default class Show extends Base {
    validate(params) {
        const rules = {
            id: ['required', 'object_id'],
            data: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id, data}) {
        const set = {};
        if (data.title) set.title = data.title;
        if (data.speciality) set.speciality = data.speciality;
        let subject = await storage.subjects.show(id);

        if (!subject) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        subject = await storage.subjects.update(id, set);

        return {data: dumpSubject(subject)};
    }
}
