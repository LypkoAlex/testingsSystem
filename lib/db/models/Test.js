import mongoose         from 'mongoose';
import updatedTimestamp from 'mongoose-updated_at';
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const TestSchema  = new mongoose.Schema({
    examId      : { type : Schema.Types.ObjectId, ref : 'exams'},
    questions   : [{ type : Schema.Types.ObjectId, ref : 'questions'}],
    answers     : [],
    saveSession : Boolean,
    totalTime   : { type : Number, default : 0},
    result      : Number,
    type        : { type : String, enum : ['TESTING', 'EXAM'] },
    subject     : { type : Schema.Types.ObjectId, ref : 'subjects'},
    createdAt   : { type : Date, default: Date.now },
    isEnd       : { type : Boolean, default : false}
});
TestSchema.plugin(updatedTimestamp);

module.exports = mongoose.model('Tests', TestSchema);
