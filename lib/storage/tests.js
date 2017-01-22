import { Test } from '../db/models';

export default {
    async create(data) {
        const testing = new Test(data);
        const a = await testing.save();
        return a;
    },

    async show(id) {
        const data = await Test.findOne({ _id : id});

        return data;
    }
};
