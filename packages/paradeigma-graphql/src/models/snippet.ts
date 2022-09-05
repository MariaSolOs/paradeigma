import { Schema, model, models } from 'mongoose';
import { ProgrammingLanguage, SnippetStyle } from '../sdk';
import { SNIPPET_NAME_MAX_LENGTH, SNIPPET_DESCRIPTION_MAX_LENGTH } from './constants';
import type { Types, Model, ImpartialSchemaDefinition } from 'mongoose';

export interface SnippetDocument {
    _id: Types.ObjectId;
    name: string;
    description: string;
    content: string;
    language: ProgrammingLanguage;
    style: SnippetStyle;
}

const snippetSchemaFields: Omit<ImpartialSchemaDefinition<SnippetDocument>, '_id'> = {
    name: {
        type: String,
        required: true,
        maxlength: SNIPPET_NAME_MAX_LENGTH
    },
    description: {
        type: String,
        required: true,
        maxlength: SNIPPET_DESCRIPTION_MAX_LENGTH
    },
    content: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: Object.values(ProgrammingLanguage)
    },
    style: {
        type: String,
        required: true,
        enum: Object.values(SnippetStyle)
    }
}   

const snippetSchema = new Schema<SnippetDocument>(snippetSchemaFields);

export default (models['Snippet'] as Model<SnippetDocument, {}, {}>) || model<SnippetDocument>('Snippet', snippetSchema);