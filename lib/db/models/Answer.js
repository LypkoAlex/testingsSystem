import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const AnswerSchema  = new Schema({
    text : String,
    isTrue : { type : Boolean, default : false}
});

module.exports = mongoose.model('Answers', AnswerSchema);
