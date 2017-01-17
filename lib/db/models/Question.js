import mongoose from 'mongoose';
import subject from 'Subject';

mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const QuestionSchema  = new Schema({
    question   : String,
    answers    : [{type : Schema.Types.ObjectId, ref : 'Answers'}],
    speciality : {type : Schema.Types.ObjectId, ref : 'Specialities'},
    subject    : {type : Schema.Types.ObjectId, ref : 'Subjects'}
});

QuestionSchema.post('save', async (question) => {
    subject.where({ _id: question.subject }).questions.push(question._id);
});

module.exports = mongoose.model('Questions', QuestionSchema);
