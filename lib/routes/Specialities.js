import Base from './Base';

export default class Specialities extends Base {
    list() {
        return this.run('specialities/List', {
            params: {}
        });
    }
    show(req) {
        const params = req.query;
        params.id = req.params.id;
        return this.run('specialities/Show', {
            params,
            session: req.session
        });
    }
    create(req) {
        return this.run('specialities/Create', {
            params:  req.body,
            session: req.session
        });
    }
    update(req) {
        const params = req.body;
        params.id = req.params.id;
        return this.run('specialities/Update', {
            params,
            session: req.session
        });
    }
    delete(req) {
        return this.run('specialities/Delete', {
            params:  req.params,
            session: req.session
        });
    }
}
