import Base             from '../Base';
import storage          from '../../storage';
import { dumpTesting }  from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                specialityId: ['required', {'max_length': 250}],
                examId:  ['required', {'max_length': 250}]
            }}]
        };

        return this.validator.validate(params, rules);
    }

    async execute({data}) {
        const project = await storage.sessions.create(data);

        return {data: dumpTesting(project)};
    }
}
