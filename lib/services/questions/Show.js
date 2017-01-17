import Base            from '../Base';
import storage         from '../../storage';
import { dumpQuestion } from '../utils';
import X               from '../../Exception';

export default class Show extends Base {
    validate(params) {
        const rules = {
            id: ['required', 'positive_integer']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        const project = await storage.question.show(id);
        if (!project) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        return {data: dumpQuestion(project)};
    }
}
