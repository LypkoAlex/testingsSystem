import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const SubjectSchema  = new Schema({
    title        : String,
    specialityID : Schema.Types.ObjectId
});

module.exports = mongoose.model('Subjects', SubjectSchema);
