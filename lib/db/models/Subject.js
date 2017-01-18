import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const SubjectSchema  = new Schema({
    title        : String,
    speciality   : { type : Schema.Types.ObjectId, ref : 'Specialities' }
});

module.exports = mongoose.model('Subjects', SubjectSchema);
