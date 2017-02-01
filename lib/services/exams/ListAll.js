import Base         from '../Base';
import storage      from '../../storage';
import { dumpExam } from '../utils';

export default class List extends Base {
    validate(params) {
        const rules = {};

        return this.validator.validate(params, rules);
    }

    async execute() {
        const data = await storage.exams.listAll();
        console.log(data);
        return {data : data.map(dumpExam)};
    }
}
