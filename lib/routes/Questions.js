import Base from './Base';

export default class Questions extends Base {
    create(req) {
        return this.run('questions/Show', {
            params:  req.body,
            session: req.session
        });
    }
}
