import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const ExamSchema  = new Schema({
    title        : String,
    specialityID : Schema.Types.ObjectId,
    subjects     : []
});

module.exports = mongoose.model('Exams', ExamSchema);
