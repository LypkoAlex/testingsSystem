import { Question } from '../db/models';

export default {
    async create(data) {
        const question = new Question({
            text        : data.text,
            answers     : data.answers,
            subject     : data.subject,
            answerIndex : data.answerIndex
        });

        await question.save();
        return question;
    },

    async show(id) {
        const question = await Question.findOne({ _id : id});

        return question;
    },

    async listAll() {
        const question = await Question.find({})
                                       .populate('subject');

        return question;
    },

    async list(subjectId) {
        const question = await Question.find({ subject : subjectId});

        return question;
    },

    async delete(id) {
        await Question.remove({ _id : id});

        return {};
    },

    async update(id, set) {
        await Question.update({ _id : id}, { $set : set });
        const question = await Question.findOne({ _id : id});

        return question;
    },

    async findLimited(query, limit) {
        const questions = await Question.find(query).limit(limit);

        return questions;
    }
};
