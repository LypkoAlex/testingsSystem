import Base            from '../Base';
import storage         from '../../storage';
import { dumpQuestion } from '../utils';

export default class List extends Base {
    validate(params) {
        const rules = {};

        return this.validator.validate(params, rules);
    }

    async execute() {
        const data = await storage.questions.listAll();
        return {data : data.map(dumpQuestion)};
    }
}
