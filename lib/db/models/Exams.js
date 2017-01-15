import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExamSchema  = new Schema({
    title     : String
});

module.exports = mongoose.model('Exams', ExamSchema);
