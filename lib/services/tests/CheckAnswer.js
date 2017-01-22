import Base             from '../Base';
import storage          from '../../storage';
import { checkAnswer }  from '../../TestingManager.js';
import X                from '../../Exception';

export default class Create extends Base {
    validate(params) {
        console.log(params);
        const rules = {
            data : ['required', {'nested_object': {
                question : ['required', 'object_id'],
                answer   : ['required', 'positive_integer']
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

        const check = await checkAnswer({question, answer : data.answer});

        return {data: check};
    }
}
