import Base             from '../Base';
import storage          from '../../storage';
import { Question }     from '../../db/models';
import { dumpTesting }  from '../utils';

export default class Create extends Base {
    validate(params) {
        const rules = {
            data: ['required', {'nested_object': {
                // eslint-disable-next-line
                type      : ['required', { one_of     : ['TESTING', 'EXAM'] }],
                startTime : ['required', {'max_length': 250}]
            },
            examId : ['required', 'object_id']
        }]
        };

        return this.validator.validate(params, rules);
    }

    async execute({data, examId}) {
        const exam = await storage.exams.show(examId);
        const questions = [];
        exam.subjects.map(async item => {
            let limitedQuestions = await Question.find({subject : item.subject}).limit(item.count);
            limitedQuestions.map(question => {
                questions.push(question._id);
            });
        });
        
        return {data: dumpTesting(project)};
    }
}
