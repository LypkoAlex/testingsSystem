import Base from './Base';

export default class Questions extends Base {
    create(req) {
        const params = req.body;
        params.subjectId = req.params.subjectId;
        return this.run('questions/Create', {
            params,
            session: req.session
        });
    }

    show(req) {
        const params = req.query;
        params.id = req.params.id;
        return this.run('questions/Show', {
            params,
            session: req.session
        });
    }

    listAll() {
        return this.run('questions/ListAll', {
            params : {}
        });
    }

    list(req) {
        const params = req.query;
        params.subjectId = req.params.subjectId;
        return this.run('questions/List', {
            params
        });
    }

    delete(req) {
        return this.run('questions/Delete', {
            params:  req.params,
            session: req.session
        });
    }

    update(req) {
        const params = req.body;
        params.id = req.params.id;
        return this.run('questions/Update', {
            params,
            session: req.session
        });
    }
}
