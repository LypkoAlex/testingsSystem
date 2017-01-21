import { Test } from '../db/models';

export default {
    async create(data) {
        const testing = new Test(data);
        const a = await testing.save();
        return 'NORMAS SYKA' + a;
    }
};
