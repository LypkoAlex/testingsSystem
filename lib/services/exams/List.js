import Base            from '../Base';
import storage         from '../../storage';
import { dumpExam, dumpSpeciality } from '../utils';
import X from '../../Exception';


export default class List extends Base {
    validate(params) {
        const rules = {
            specialityId: ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({ specialityId }) {
        const speciality = await storage.specialities.show(specialityId);
        if (!speciality) {
            return new X({
                fields: {},
                code: 'WRONG_ID'
            });
        }
        const data = await storage.exams.list(specialityId);
        return {data : data.map(dumpExam)};
    }
}
