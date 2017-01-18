import Base            from '../Base';
import storage         from '../../storage';
import { dumpSubject, dumpSpeciality } from '../utils';
import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {
            specialityId: ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({ specialityId }) {
        let speciality;
        if (specialityId) {
            speciality = await storage.specialities.show(specialityId);
        }
        if (!speciality) {
            return new X({
                fields: {},
                code: 'WRONG_ID'
            });
        }
        const data = await storage.subjects.list(specialityId);
        return {data : data.map(item => {
            const dumpedItem = dumpSubject(item);
            dumpedItem.speciality = dumpSpeciality(dumpedItem.speciality);
            return dumpedItem;
        })};
    }
}
