import Base         from '../Base';
import storage      from '../../storage';
import { dumpExam } from '../utils';
import X            from '../../Exception';

export default class Show extends Base {
    validate(params) {
        const rules = {
            id: ['required', 'object_id'],
            data: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id, data}) {
        const set = {};
        console.log(data);
        if (data.subjects)   set.subjects = data.subjects;
        if (data.title)      set.title = data.title;
        if (data.speciality) set.speciality = data.speciality;

        let exam = await storage.exams.show(id);

        if (!exam) return new X({
            fields: {},
            code: 'WRONG_ID'
        });

        exam = await storage.exams.update(id, set);

        return {data: dumpExam(exam)};
    }
}
