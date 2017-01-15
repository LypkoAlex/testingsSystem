import Base            from '../Base';
import storage         from '../../storage';
// import { dumpProject } from '../utils';
// import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {};

        return this.validator.validate(params, rules);
    }

    async execute() {
        const data = await storage.projects.list();
        return {data};
    }
}
