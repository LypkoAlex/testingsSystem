import _         from 'lodash';

import services  from '../services';
import Validator from '../services/Validator';

export default class Base {
    constructor() {
        this.validator = new Validator();
    }

    async run(actionName, { session, params = {} }) {
        const [actionGroup, actionClass] = actionName.split('/');
        const context = _.cloneDeep(session && session.context ? session.context : {});

        const result = await new services[actionGroup][actionClass]({
            validator: this.validator,
            context
        }).run(params);

        return result;
    }
}
