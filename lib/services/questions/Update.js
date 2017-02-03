import Base             from '../Base';
import storage          from '../../storage';
import { dumpQuestion } from '../utils';
import X                from '../../Exception';

export default class Show extends Base {
    validate(params) {
        const rules = {
            data: [{'nested_object': {
                text        : [{'max_length' : 1500}],
                subject     : 'object_id',
                answers     : [{'list_of'    : [{'max_length': 500}]}],
                answerIndex : 'integer',
                img         : 'string'
            }}],
            id  : ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id, data}) {
        let question = await storage.questions.show(id);

        if (!question) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        question = await storage.questions.update(id, data);

        return {data: dumpQuestion(question)};
    }
}
