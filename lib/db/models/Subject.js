import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const SubjectSchema  = new Schema({
    title        : String,
    specialityID : { type : Schema.Types.ObjectId, ref : 'Questions' }
});

module.exports = mongoose.model('Subjects', SubjectSchema);
