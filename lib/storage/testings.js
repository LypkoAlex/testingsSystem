import { Testings } from '../db/models';
// import { promisify } from '../utils';
// import {toObjects, format} from './utils.js';
// const e = db.escape;

export default {
    async create(data) {
        const testing = new Testings(data);
        const a = await testing.save();
        return 'NORMAS SYKA' + a;
    }
};
