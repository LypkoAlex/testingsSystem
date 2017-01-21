import Base from './Base';

export default class Projects extends Base {
    create(req) {
        const params = req.body;
        return this.run('feedback/Create', {
            params,
            session: req.session
        });
    }
}
