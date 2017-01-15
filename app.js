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

router.getAsync(   '/projects',     routes.projects.list.bind(routes.projects));

if (!process.env.ENV !== 'test') {
    app.listen(appPort);
}

export default app;
