import { Subject } from '../db/models';

export default {
    async list(specialityId) {
        const data = await Subject.find({speciality : specialityId})
                                  .populate('speciality');

        return data;
    },

    async listAll() {
        const data = await Subject.find({})
                                  .populate('speciality');

        return data;
    },

    async show(id) {
        const data = await Subject.findOne({ _id : id});

        return data;
    },

    async create(data) {
        const subject = new Subject({
            title : data.title,
            speciality : data.speciality
        });

        await subject.save();
        return subject;
    },

    async delete(id) {
        await Subject.remove({ _id : id});

        return {};
    },

    async update(id, set) {
        await Subject.update({ _id : id}, { $set : set });
        const subject = await Subject.findOne({ _id : id});

        return subject;
    }
};
