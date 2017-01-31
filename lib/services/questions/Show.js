import Base            from '../Base';
import storage         from '../../storage';
import { dumpQuestionAnswer } from '../utils';
import X               from '../../Exception';

export default class Show extends Base {
    validate(params) {
        const rules = {
            id: ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        const question = await storage.questions.show(id);
        if (!question) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        return {data: dumpQuestionAnswer(question)};
    }
}
