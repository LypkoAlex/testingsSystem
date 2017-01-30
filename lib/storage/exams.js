import { Exam } from '../db/models';

export default {
    async list(specialityId) {
        const data = await Exam.find({speciality : specialityId}).populate('speciality');

        return data;
    },

    async listAll() {
        const data = await Exam.find({}).populate('speciality');
        return data;
    },

    async create(data) {
        const exam = new Exam({
            title      : data.title,
            speciality : data.speciality
        });

        await exam.save();
        return exam;
    },

    async update(id, set) {
        await Exam.update({ _id : id}, { $set : set });
        const exam = await Exam.findOne({ _id : id}).populate('subjects.subject');
        return exam;
    },

    async show(id) {
        const data = await Exam.findOne({ _id : id}).populate('subjects.subject');

        return data;
    },

    async delete(id) {
        await Exam.remove({ _id : id});

        return {};
    }
};
