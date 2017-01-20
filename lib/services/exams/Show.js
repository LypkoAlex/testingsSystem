import Base            from '../Base';
import storage         from '../../storage';
import { dumpExam } from '../utils';
import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {
            id: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        const exam = await storage.exams.show(id);
        if (!exam) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        return {data : dumpExam(exam)};
    }
}
