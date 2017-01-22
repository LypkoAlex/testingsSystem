import Base             from '../Base';
import storage          from '../../storage';
import { dumpTest }     from '../utils';
import { getQuestions } from '../../TestingManager.js';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                // eslint-disable-next-line
                type : ['required', { one_of : ['TESTING', 'EXAM'] }],
                subject : ['object_id']
            }
            }],
            examId : ['required']
        };
        return this.validator.validate(params, rules);
    }

    async execute({data, examId}) {
        const questions = await getQuestions(examId, data.type, data.subject);
        data.questions = questions;
        const test = await storage.tests.create(data);

        return {data: dumpTest(test)};
    }
}
