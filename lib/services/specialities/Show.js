import Base            from '../Base';
import storage         from '../../storage';
import { dumpSpeciality } from '../utils';
import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {
            id: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        const speciality = await storage.specialities.show(id);
        if (!speciality) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        return {data : dumpSpeciality(speciality)};
    }
}
