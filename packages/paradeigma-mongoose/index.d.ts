/// <reference path="types/mongoose.d.ts" />

import type { SnippetDocument } from './snippet';
import type { Model } from 'mongoose';

export type { SnippetDocument };
export const Snippet: Model<SnippetDocument, {}, {}>;