import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TestingSchema  = new mongoose.Schema({
    specialityId  : Schema.Types.ObjectId,
    examId        : Schema.Types.ObjectId,
    examQuestions : [],
    result        : [],
    saveSession   : Boolean,
    startTime     : { type: Date, default: Date.now },
    totalTime     : Date,
    evaluation    : Number
});

module.exports = mongoose.model('Testings', TestingSchema);
