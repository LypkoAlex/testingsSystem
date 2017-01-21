import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const TestSchema  = new mongoose.Schema({
    examId      : Schema.Types.ObjectId,
    questions   : [{ type : Schema.Types.ObjectId, ref : 'questions'}],
    answers     : [],
    saveSession : Boolean,
    startTime   : { type: Date, default: Date.now },
    totalTime   : Date,
    result      : Number,
    type        : { type : String, enum : ['TESTING', 'EXAM'] }
});

module.exports = mongoose.model('Tests', TestSchema);
