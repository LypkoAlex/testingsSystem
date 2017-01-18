import { Speciality } from '../db/models';

export default {
    async list() {
        const data = await Speciality.find({});

        return data;
    },

    async show(id) {
        const data = await Speciality.findOne({ _id : id});

        return data;
    },

    async create(data) {
        const speciality = new Speciality({ title : data.title});

        await speciality.save();
        return speciality;
    },

    async delete(id) {
        await Speciality.remove({ _id : id});

        return {};
    },

    async update(id, set) {
        await Speciality.update({ _id : id}, { $set : set });
        const speciality = await Speciality.findOne({ _id : id});

        return speciality;
    }
};
