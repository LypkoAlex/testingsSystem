import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SpecialitySchema  = new Schema({
    title: String
});

module.exports = mongoose.model('Specialitys', SpecialitySchema);
