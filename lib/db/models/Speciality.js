import mongoose from 'mongoose';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const SpecialitySchema  = new Schema({
    title: String
});

module.exports = mongoose.model('Specialities', SpecialitySchema);
