import Base             from '../Base';
import storage          from '../../storage';
import { dumpQuestion } from '../utils';
import X                from '../../Exception';

export default class Show extends Base {
    validate(params) {
        console.log(params);
        const rules = {
            id  : ['required', 'object_id'],
            data: ['required', {'nested_object': {
                text    : [{'max_length' : 1500}],
                subject : 'object_id',
                answers : [{'list_of' : [{'max_length': 500}]}],
                answerIndex : ['positive_integer']
            }}]
        };

        return this.validator.validate(params, rules);
    }

    async execute({id, data}) {
        console.log('id, data', id, data);
        let question = await storage.questions.show(id);

        if (!question) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        question = await storage.questions.update(id, data);

        return {data: dumpQuestion(question)};
    }
}
