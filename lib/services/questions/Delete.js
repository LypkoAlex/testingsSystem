import Base             from '../Base';
import storage          from '../../storage';

export default class Delete extends Base {
    validate(params) {
        const rules = {
            id: ['required']
        };

        return this.validator.validate(params, rules);
    }

    async execute({id}) {
        await storage.questions.delete(id);

        return {};
    }
}
