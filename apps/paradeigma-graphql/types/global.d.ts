import type { Mongoose } from 'mongoose';

declare global {
    var mongoosePromise: Promise<Mongoose>;
}