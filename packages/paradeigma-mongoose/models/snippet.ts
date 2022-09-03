import { Schema, model, models } from 'mongoose';
import { ProgrammingLanguage, SnippetStyle } from '@paradeigma/graphql';
import type { Types, Model, ImpartialSchemaDefinition} from 'mongoose';

export interface SnippetDocument {
    _id: Types.ObjectId;
    name: string;
    description: string;
    content: string;
    language: ProgrammingLanguage;
    style: SnippetStyle;
}

// TODO: Check if the max lengths are appropriate
// TODO: Add a maximum length for content?
/**
 * Maximum length for the name field.
 */
 export const NAME_MAX_LENGTH = 30;

 /**
  * Maximum length for the description field.
  */
 export const DESCRIPTION_MAX_LENGTH = 100;

const snippetSchemaFields: Omit<ImpartialSchemaDefinition<SnippetDocument>, '_id'> = {
    name: {
        type: String,
        required: true,
        maxlength: NAME_MAX_LENGTH
    },
    description: {
        type: String,
        required: true,
        maxlength: DESCRIPTION_MAX_LENGTH
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