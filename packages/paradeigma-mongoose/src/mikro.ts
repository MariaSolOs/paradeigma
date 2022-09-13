import { Schema, model, models } from 'mongoose';
import { ProgrammingLanguage, MikroStyle, MIKRO_NAME_MAX_LENGTH, MIKRO_DESCRIPTION_MAX_LENGTH } from '@paradeigma/graphql';
import type { Types, Model, ImpartialSchemaDefinition } from 'mongoose';

export interface MikroDocument {
    _id: Types.ObjectId;
    name: string;
    description: string;
    content: string;
    language: ProgrammingLanguage;
    style: MikroStyle;
}

const mikroSchemaFields: Omit<ImpartialSchemaDefinition<MikroDocument>, '_id'> = {
    name: {
        type: String,
        required: true,
        maxlength: MIKRO_NAME_MAX_LENGTH
    },
    description: {
        type: String,
        required: true,
        maxlength: MIKRO_DESCRIPTION_MAX_LENGTH
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
        enum: Object.values(MikroStyle)
    }
}   

const mikroSchema = new Schema<MikroDocument>(mikroSchemaFields);

export default (models['Mikro'] as Model<MikroDocument>) || model<MikroDocument>('Mikro', mikroSchema);