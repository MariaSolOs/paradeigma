// TODO: Check if we can avoid this
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="types/mongoose.d.ts" />

import type { MikroDocument } from './src/mikro';
import type { Model } from 'mongoose';

export const Mikro: Model<MikroDocument>;
export type { MikroDocument };