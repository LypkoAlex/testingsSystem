import Base from './Base';

export default class Questions extends Base {
    create(req) {
        const params = req.body;
        params.examId = req.params.examId;
        return this.run('test/Create', {
            params,
            session: req.session
        });
    }
}
