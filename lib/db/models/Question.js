import mongoose from 'mongoose';
import subject from './Subject';

mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const QuestionSchema  = new Schema({
    text   : String,
    answers    : [],
    subject    : {type : Schema.Types.ObjectId, ref : 'Subjects'},
    answerIndex : Number
});

QuestionSchema.post('save', async (question) => {
    console.log(question._id);
    await subject.findByIdAndUpdate(question.subject, {
        $push : {
            "questions" : question._id
        }
    });
});

module.exports = mongoose.model('Questions', QuestionSchema);
