import Base             from '../Base';
import storage          from '../../storage';
import { dumpSpeciality }  from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                title : ['required', {'max_length': 250}]
            }}]
        };

        return this.validator.validate(params, rules);
    }

    async execute({data}) {
        const speciality = await storage.specialities.create(data);

        return {data: dumpSpeciality(speciality)};
    }
}
