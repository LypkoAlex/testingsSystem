import Base             from '../Base';
import storage          from '../../storage';
import { dumpQuestion }  from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                text        : ['required', {'max_length': 1500}],
                answers     : ['required', {'list_of' : [{'max_length': 500}]}],
                answerIndex : ['required', 'integer'],
                img         : 'string'
            }}],
            subjectId : ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({data, subjectId}) {
        data.subject = subjectId;
        const question = await storage.questions.create(data);

        return {data: dumpQuestion(question)};
    }
}
