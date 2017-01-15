import mongoose from 'mongoose';
import { database } from '../../etc/config.json';
console.log(database);
export default  {
    connect : () => {
        console.log(1);
        mongoose.connect(database.path);
        console.log(2);
    }
};
