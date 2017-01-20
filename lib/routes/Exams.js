import Base from './Base';

export default class Specialities extends Base {
    list(req) {
        const params = req.body;
        params.specialityId = req.params.specialityId;
        return this.run('exams/List', {
            params,
            session: req.session
        });
    }

    listAll() {
        return this.run('exams/ListAll', {
            params : {}
        });
    }

    create(req) {
        const params = req.body;
        params.specialityId = req.params.specialityId;
        return this.run('exams/Create', {
            params,
            session: req.session
        });
    }

    update(req) {
        const params = req.body;
        params.id = req.params.id;
        return this.run('exams/Update', {
            params,
            session: req.session
        });
    }

    show(req) {
        const params = req.query;
        params.id = req.params.id;
        return this.run('exams/Show', {
            params,
            session: req.session
        });
    }

    delete(req) {
        return this.run('exams/Delete', {
            params:  req.params,
            session: req.session
        });
    }
}
