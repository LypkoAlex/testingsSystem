import X from '../Exception';

export default class Base {
    constructor(args) {
        /* istanbul ignore next */
        if (!args.validator) throw new Error('validator required');
        /* istanbul ignore next */
        if (!args.context) throw new Error('context required');

        this.validator = args.validator;
        this.context   = args.context;
    }

    async run(params) {
        console.log('HELLO2');
        if (this.allowedForRoles && this.allowedForRoles.indexOf(this.context.userData.role) === -1) {
            throw new X({
                code: 'PERMISSION_DENIED',
                fields: {}
            });
        }

        const data = await this.validate(params);
        return await this.execute(data);
    }
}
