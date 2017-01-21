import Base            from '../Base';
import storage         from '../../storage';
import { dumpSubject } from '../utils';

export default class List extends Base {
    validate(params) {
        const rules = {};

        return this.validator.validate(params, rules);
    }

    async execute() {
        const data = await storage.subjects.listAll();
        return {data : data.map(dumpSubject)};
    }
}
