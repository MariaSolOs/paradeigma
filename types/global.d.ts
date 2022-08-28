import type { Mongoose } from 'mongoose';

declare global {
    var mongoose: Mongoose | undefined;
}