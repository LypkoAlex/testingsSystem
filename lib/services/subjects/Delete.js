import Base             from '../Base';
import storage          from '../../storage';

export default class Delete extends Base {
    validate(params) {
        const rules = {
            subjectId: ['required', 'object_id']
        };

        return this.validator.validate(params, rules);
    }

    async execute({subjectId}) {
        await storage.subjects.delete(subjectId);

        return {};
    }
}
