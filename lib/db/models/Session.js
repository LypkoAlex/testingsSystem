import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const SessionSchema  = new mongoose.Schema({
    examId      : Schema.Types.ObjectId,
    questions   : [],
    answers     : [],
    saveSession : Boolean,
    startTime   : { type: Date, default: Date.now },
    totalTime   : Date,
    result      : Number
});

module.exports = mongoose.model('Sessions', SessionSchema);
