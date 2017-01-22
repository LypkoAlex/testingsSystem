import Base from './Base';

export default class Questions extends Base {
    create(req) {
        const params = req.body;
        params.examId = req.params.examId;
        return this.run('tests/Create', {
            params,
            session: req.session
        });
    }

    nextQuestion(req) {
        const params = req.body;
        params.testId = req.params.testId;
        return this.run('tests/NextQuestion', {
            params,
            session: req.session
        });
    }

    checkAnswer(req) {
        const params = req.body;
        params.testId = req.params.testId;
        return this.run('tests/CheckAnswer', {
            params,
            session: req.session
        });
    }
}
