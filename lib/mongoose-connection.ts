import mongoose from 'mongoose';

// Global is used here to maintain a cached connection across hot reloads
// in development. This prevents connections growing exponentially
// during API Route usage.
let cachedConnection = global.mongoose;
let cachedPromise: Promise<typeof mongoose> | undefined = undefined;

const mongooseConnection = async () => {
    if (!cachedPromise) {
        cachedPromise = mongoose.connect(process.env['MONGODB_URI']!).then(mongoose => {
            console.log('Mongoose connected.');
            return mongoose;
        });

        cachedConnection = await cachedPromise;
    }

    return cachedConnection;
}

export default mongooseConnection;