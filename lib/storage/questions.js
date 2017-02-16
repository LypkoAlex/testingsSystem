import { Question } from '../db/models';

export default {
    async create(data) {
        const question = new Question({
            text        : data.text,
            answers     : data.answers,
            subject     : data.subject,
            img         : data.img || '',
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
        const question = await Question.find({});

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

    async update(id, data) {
        const question = await Question.findOne({ _id : id});
        if (data.text) question.text = data.text;
        if (data.answers) question.answers = data.answers;
        if (data.subject) question.subject = data.subject;
        if (data.img) question.img = data.img;
        if (data.answerIndex || data.answerIndex === 0) question.answerIndex = data.answerIndex;
        await question.save();
        return question;
    },

    async findLimited(query, limit) {
        const questions = await Question.find(query).limit(limit);

        return questions;
    }
};
