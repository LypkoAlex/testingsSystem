import Exception from '../Exception';
import LIVR      from 'livr';

const defaultRules = {
    'object_id'() {
        return value => {
            if (value === undefined || value === null || value === '') return;
            if (typeof value !== 'string') return 'FORMAT_ERROR';
            if (value.length < 24) return 'WRONG_ID';
            if (value.length > 24) return 'WRONG_ID';
            if (value.match(/[^a-f0-9]/)) return 'WRONG_ID';
        };
    },

    equal(targetValue) {
        return value => {
            if (value === undefined || value === null || value === '') return;
            if (value !== targetValue) return 'NOT_EQUAL';
            return;
        };
    },

    'future_date'() {
        return value => {
            if (value === undefined || value === null || value === '') return;
            const valueDate = new Date(value);

            valueDate.setTime(valueDate.getTime() + valueDate.getTimezoneOffset() * 60 * 1000);
            if (valueDate - new Date() < 0) return 'WRONG_DATE';
            return;
        };
    },

    'secure_password'() {
        return value => {
            if (value === undefined || value === null || value === '') return;
            const regexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

            if (!regexp.test(value)) return 'NOT_VALID';
        };
    }
};

LIVR.Validator.registerDefaultRules(defaultRules);

export default class Validator {
    validate(data, rules) {
        const validator = new LIVR.Validator(rules).prepare();

        const result = validator.validate(data);

        if (!result) {
            throw new Exception({
                code:   'FORMAT_ERROR',
                fields: validator.getErrors()
            });
        }

        return result;
    }
}
