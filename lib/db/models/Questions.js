import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const QuestionSchema  = new Schema({
    question      : String,
    answers       : [],
    specialityId  : Schema.Types.ObjectId,
    examId        : Schema.Types.ObjectId
});

module.exports = mongoose.model('Questions', QuestionSchema);
