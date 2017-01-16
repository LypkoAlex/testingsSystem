import mongoose from 'mongoose';
import { database } from '../../etc/config.json';
export default  {
    connect : () => {
        mongoose.connect(database.path);
    }
};
