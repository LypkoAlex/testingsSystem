import { Questions } from '../db/models';
// import { promisify } from '../utils';
// import {toObjects, format} from './utils.js';
// const e = db.escape;

export default {
    async list() {
        // console.log(questions.find.toString());
        // const findAsync = promisify(questions, 'find');
        // findAsync.();
        const a = await Questions.find({});

        return 'NORMAS SYKA'+a;
    }
};
