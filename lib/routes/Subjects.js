import Base from './Base';

export default class Specialities extends Base {
    list(req) {
        const params = req.body;
        params.specialityId = req.params.specialityId;
        return this.run('subjects/List', {
            params,
            session: req.session
        });
    }
    show(req) {
        const params = req.query;
        params.id = req.params.id;
        return this.run('subjects/Show', {
            params,
            session: req.session
        });
    }
    create(req) {
        const params = req.body;
        params.specialityId = req.params.specialityId;
        console.log('params', params);
        return this.run('subjects/Create', {
            params,
            session: req.session
        });
    }
    update(req) {
        const params = req.body;
        params.id = req.params.id;
        return this.run('subjects/Update', {
            params,
            session: req.session
        });
    }
    delete(req) {
        return this.run('subjects/Delete', {
            params:  req.params,
            session: req.session
        });
    }
}
