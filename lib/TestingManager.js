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

    completeTest : async (testId) => {
        const test = await storage.tests.show(testId);
        const total =  test.answers.length + test.questions.length;
        const trues = test.answers.filter(item => item).length;
        const result = ( trues / total ) * 100;
        await storage.tests.update(testId, {result, isEnd : true});
    },

    checkAnswer : async (data) => {
        data.test.questions.remove(data.question._id);
        await data.test.save();
        await Test.findByIdAndUpdate(data.test._id, {
            $push : {
                "answers" : data.question.answerIndex === data.answer
            }
        });
        return {
            isTrue  : data.question.answerIndex === data.answer,
            correct : data.question.answerIndex
        };
    },

    updateTotalTime : async (testId) => {
        const tests = await storage.tests.show(testId);
        let totalTime = tests.totalTime;
        console.log(new Date(), tests.updatedAt);
        totalTime += moment(new Date()).unix() - moment(tests.updatedAt).unix();
        await storage.tests.update(testId, {totalTime});
    },

    checkTotalTime : async (testId) => {
        const test = await storage.tests.show(testId);
        return test.totalTime > DEADLINE;
    }
};
