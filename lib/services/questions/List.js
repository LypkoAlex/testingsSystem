import Base            from '../Base';
import storage         from '../../storage';
import { dumpQuestion } from '../utils';
import X from '../../Exception';

export default class List extends Base {
    validate(params) {
        const rules = {
            subjectId : ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({ subjectId }) {
        const subject = await storage.subjects.show(subjectId);
        if (!subject) {
            return new X({
                fields: {},
                code: 'WRONG_ID'
            });
        }
        const data = await storage.questions.list(subjectId);
        return {data : data.map(dumpQuestion)};
    }
}
