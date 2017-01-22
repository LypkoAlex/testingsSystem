import Base             from '../Base';
import storage          from '../../storage';
import { getQuestion }  from '../../TestingManager.js';
import X                from '../../Exception';
import { dumpQuestion,
         dumpQuestionAnswer } from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            testId : ['required', 'object_id']
        };
        return this.validator.validate(params, rules);
    }

    async execute({ testId }) {
        const test = await storage.tests.show(testId);
        if (!test) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        const question = await getQuestion(test);
        if (question === -1) {
            return {
                data: {
                    code : 'NONE'
                }
            };
        }
        if (test.type === 'EXAM') return {data: dumpQuestion(question)};
        return {data: dumpQuestionAnswer(question)}
    }
}
