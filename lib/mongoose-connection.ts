import mongoose from 'mongoose';

const mongooseConnection = async () => {
    try {
        if (mongoose.connections[0]?.readyState) {
            // Use current connection
            return;
        }

        await mongoose.connect(process.env['MONGODB_URI']!).then(() => {
            console.log('Mongoose connected.');
        });
    } catch (err) {
        console.error(`MONGOOSE ERROR: ${err}`);
    }
}

export default mongooseConnection;