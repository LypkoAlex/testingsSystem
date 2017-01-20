import Base         from '../Base';
import storage      from '../../storage';
import { dumpExam } from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                title : ['required', {'max_length': 250}]
            }}],
            specialityId: ['required', {'max_length': 250}]
        };

        return this.validator.validate(params, rules);
    }

    async execute({data, specialityId}) {
        data.speciality = specialityId;
        const exam = await storage.exams.create(data);

        return {data: dumpExam(exam)};
    }
}
