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

// TEST
// router.getAsync(   '/projects',     routes.projects.list.bind(routes.projects));

// testings
// router.postAsync('/sessions', routes.sessions.create.bind(routes.sessions));
// Subject
router.getAsync(    '/specialities/:specialityId/subjects', routes.subjects.list.bind(routes.subjects));
router.postAsync(   '/specialities/:specialityId/subjects', routes.subjects.create.bind(routes.subjects));

router.getAsync(    '/subjects/:id', routes.subjects.show.bind(routes.subjects));
router.deleteAsync( '/subjects/:id', routes.subjects.delete.bind(routes.subjects));
router.patchAsync(  '/subjects/:id', routes.subjects.update.bind(routes.subjects));
// Speciality
router.getAsync(    '/specialities',     routes.specialities.list.bind(routes.specialities));
router.getAsync(    '/specialities/:id', routes.specialities.show.bind(routes.specialities));
router.postAsync(   '/specialities',     routes.specialities.create.bind(routes.specialities));
router.deleteAsync( '/specialities/:id', routes.specialities.delete.bind(routes.specialities));
router.patchAsync(  '/specialities/:id', routes.specialities.update.bind(routes.specialities));

// Questions
// router.getAsync( '/questions/:id', routes.questions.show.bind(routes.questions));

if (!process.env.ENV !== 'test') {
    app.listen(appPort);
}

export default app;
