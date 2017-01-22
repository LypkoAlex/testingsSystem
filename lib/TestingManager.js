import storage     from './storage';
import { Test }    from './db/models';
import { flatten } from 'lodash';
import moment      from 'moment';
const DEADLINE = 60 * 180;
export default {
    getQuestions : async (examId, type, subject) => {
        let questions;
        if (type === 'EXAM') {
            const exam = await storage.exams.show(examId);
            questions = await Promise.all(exam.subjects.map(async item => {
                let limitedQuestions = await storage.questions.findLimited({subject : item.subject}, item.count);
                return limitedQuestions;
            }));
            questions = flatten(questions).map(item => item._id);
        } else {
            questions = await storage.questions.list(subject);
            questions = questions.map(item => item._id);
        }
        return questions;
    },

    getQuestion : async (test) => {
        if (test.questions.length) {
            const questionId = test.questions[test.questions.length - 1];
            const question = await storage.questions.show(questionId);
            return question;
        }
        return -1;
    },

    checkAnswer : async (data) => {
        await Test.update({ _id : data._id}, { $pull : { questions : data.question._id } });
        return {
            isTrue  : data.question.answerIndex === data.answer,
            correct : data.question.answerIndex
        };
    },

    updateTotalTime : async (examId) => {
        const exam = await storage.exams.show(examId);
        let totalTime = exam.totalTime;
        totalTime += moment(new Date()).diff(exam.updatedAt, 'seccond');
        await storage.exams.update({totalTime});
    },

    checkTotalTime : async (examId) => {
        const exam = await storage.exams.show(examId);
        return exam.totalTime > DEADLINE;
    }
};
