import Base            from '../Base';
import storage         from '../../storage';
import { dumpSpeciality } from '../utils';
// import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {};

        return this.validator.validate(params, rules);
    }

    async execute() {
        const data = await storage.specialities.list();
        return {data : data.map(dumpSpeciality)};
    }
}
