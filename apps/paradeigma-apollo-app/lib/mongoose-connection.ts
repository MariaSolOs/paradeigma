import mongoose from 'mongoose';
import type { Mongoose } from 'mongoose';

/**
 * Module-scoped mongoose connection promise, so that we can share it
 * across different functions.
 */
let mongooseConnection: Promise<Mongoose>;

const getMongoosePromise = async () => {
    // the `strictQuery` option will be switched back to `false` by default in Mongoose 7,
    // so preparing for the change here.
    mongoose.set('strictQuery', false);

    const connection = await mongoose.connect(process.env['MONGODB_URI'] ?? '');
    console.log('Mongoose connected.');
    return connection;
};

if (process.env['VERCEL_ENV'] === 'development') {
    // In development, use a global variable so that the value is preserved
    // across module reloads caused by HMR (Hot Module Replacement).
    if (global.mongoosePromise === undefined) {
        global.mongoosePromise = getMongoosePromise();
    }

    mongooseConnection = global.mongoosePromise;
} else {
    // In production mode, it's best to not use a global variable.
    mongooseConnection = getMongoosePromise();
}

export default mongooseConnection;
