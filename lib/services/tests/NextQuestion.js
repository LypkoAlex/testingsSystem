import Base             from '../Base';
import storage          from '../../storage';
import { completeTest, getQuestion }  from '../../TestingManager.js';
import X                from '../../Exception';
import { dumpQuestion,
         dumpTest,
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

        if (test.isEnd) return {
            data: {
                code : 'ENDED',
                test : dumpTest(test)
            }
        };

        const question = await getQuestion(test);
        if (question === -1) {
            await completeTest(test._id);
            const endedTest = await storage.tests.show(test._id);
            return {
                data: {
                    code : 'ENDED',
                    test : dumpTest(endedTest)
                }
            };
        }
        question.testType = test.type;
        question.count = test.questions.length;
        if (test.type === 'EXAM') return {data: dumpQuestion(question)};
        return {data: dumpQuestionAnswer(question)};
    }
}
