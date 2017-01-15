import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TestingSchema  = new mongoose.Schema({
    specialityId  : Schema.Types.ObjectId,
    examId        : Schema.Types.ObjectId,
    examQuestions : [],
    result        : [],
    saveSession   : Boolean,
    startTime     : String,
    totalTime     : String,
    evaluation    : Number
});

module.exports = mongoose.model('Testings', TestingSchema);
