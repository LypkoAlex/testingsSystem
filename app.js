import express    from 'express';
import cors       from 'cors';
// import path       from 'path';
import bodyParser from 'body-parser';
import multipart  from 'connect-multiparty';

import getRoutes       from './lib/routes';
import promiseRouter   from './lib/PromiseRouter';
import { appPort } from './etc/config.json';
import { connect } from './lib/db/db.js';

connect();
const routes = getRoutes();
const app    = express();
const router = promiseRouter(express.Router);

router.use(multipart());

app.use(bodyParser.urlencoded());
app.use(cors({ origin: '*' }));

app.use(bodyParser.json({limit: 1024 * 1024, verify: (req, res, buf) => {
    try {
        JSON.parse(buf);
    } catch (e) {
        res.send({
            status: 0,
            error: {
                code:    'BROKEN_JSON',
                message: 'Please, verify your json'
            }
        });
    }
}}));

// API
app.use('/api/v1', router);

// Questions
router.getAsync(    '/questions/',                    routes.questions.listAll.bind(routes.questions));
router.getAsync(    '/questions/:id',                 routes.questions.show.bind(routes.questions));
router.deleteAsync( '/questions/:id',                 routes.questions.delete.bind(routes.questions));
router.patchAsync(  '/questions/:id',                 routes.questions.update.bind(routes.questions));
router.postAsync(   '/subjects/:subjectId/questions', routes.questions.create.bind(routes.questions));
router.getAsync(    '/subjects/:subjectId/questions', routes.questions.list.bind(routes.questions));

// Subject
router.getAsync(    '/subjects',                            routes.subjects.listAll.bind(routes.subjects));
router.getAsync(    '/subjects/:subjectId',                 routes.subjects.show.bind(routes.subjects));
router.patchAsync(  '/subjects/:subjectId',                 routes.subjects.update.bind(routes.subjects));
router.deleteAsync( '/subjects/:subjectId',                 routes.subjects.delete.bind(routes.subjects));
router.getAsync(    '/specialities/:specialityId/subjects', routes.subjects.list.bind(routes.subjects));
router.postAsync(   '/specialities/:specialityId/subjects', routes.subjects.create.bind(routes.subjects));


// Speciality
router.getAsync(    '/specialities',     routes.specialities.list.bind(routes.specialities));
router.postAsync(   '/specialities',     routes.specialities.create.bind(routes.specialities));
router.getAsync(    '/specialities/:id', routes.specialities.show.bind(routes.specialities));
router.deleteAsync( '/specialities/:id', routes.specialities.delete.bind(routes.specialities));
router.patchAsync(  '/specialities/:id', routes.specialities.update.bind(routes.specialities));

// Exam
router.getAsync(    '/exams/',                           routes.exams.listAll.bind(routes.exams));
router.patchAsync(  '/exams/:id',                        routes.exams.update.bind(routes.exams));
router.getAsync(    '/exams/:id',                        routes.exams.show.bind(routes.exams));
router.deleteAsync( '/exams/:id',                        routes.exams.delete.bind(routes.exams));
router.getAsync(    '/specialities/:specialityId/exams', routes.exams.list.bind(routes.exams));
router.postAsync(   '/specialities/:specialityId/exams', routes.exams.create.bind(routes.exams));

// Mail
router.postAsync( '/feedback/', routes.feedback.create.bind(routes.feedback));

// Sessions
// router.postAsync( '/exams/:examId/test', routes.test.create.bind(routes.test));


if (!process.env.ENV !== 'test') {
    app.listen(appPort);
}

export default app;
