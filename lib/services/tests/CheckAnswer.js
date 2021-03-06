import Base             from '../Base';
import storage          from '../../storage';
import { checkAnswer, updateTotalTime }  from '../../TestingManager.js';
import X                from '../../Exception';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data : ['required', {'nested_object': {
                question : ['required', 'object_id'],
                answer   : ['required']
            }}],
            testId : ['required', 'object_id']
        };
        console.log(this.validator.validate(params, rules));
        return this.validator.validate(params, rules);
    }

    async execute({ data, testId }) {
        const test     = await storage.tests.show(testId);
        const question = await storage.questions.show(data.question);

        if (!test && !question) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        await updateTotalTime(test._id);
        const check = await checkAnswer({question, test, answer : data.answer});

        return {data: check};
    }
}
