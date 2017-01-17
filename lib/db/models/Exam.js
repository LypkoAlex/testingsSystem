import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const ExamSchema  = new Schema({
    title      : String,
    speciality : { type: Schema.Types.ObjectId, ref : 'Specialities'},
    subjects   : [{type : Schema.Types.ObjectId, ref : 'Subjects'}]
});

module.exports = mongoose.model('Exams', ExamSchema);
