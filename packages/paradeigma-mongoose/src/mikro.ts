import { Schema, model, models } from 'mongoose';
import { ProgrammingLanguage, MikroStyle, MIKRO_NAME_MAX_LENGTH, MIKRO_DESCRIPTION_MAX_LENGTH } from '@paradeigma/graphql';
import type { Types, Model, SchemaDefinition } from 'mongoose';

export interface MikroDocument {
    _id: Types.ObjectId;
    name: string;
    description: string;
    content: string;
    language: ProgrammingLanguage;
    style: MikroStyle;
    rating: number;
}

const mikroSchemaFields: SchemaDefinition<MikroDocument> = {
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
    },
    rating: {
        type: Number,
        required: true,
        min: 0
    }
}   

const mikroSchema = new Schema<MikroDocument>(mikroSchemaFields);

export default (models['Mikro'] as Model<MikroDocument>) || model<MikroDocument>('Mikro', mikroSchema);