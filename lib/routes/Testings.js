import Base from './Base';

export default class Testings extends Base {
    create(req) {
        return this.run('testings/Create', {
            params:  req.body,
            session: req.session
        });
    }
}
