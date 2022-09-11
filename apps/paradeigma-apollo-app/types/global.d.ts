import type { Mongoose } from 'mongoose';

declare global {
    // eslint-disable-next-line no-var
    var mongoosePromise: Promise<Mongoose>;
}