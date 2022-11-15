import { model, models, Schema } from 'mongoose';
import {
    MIKRO_DESCRIPTION_MAX_LENGTH,
    MIKRO_NAME_MAX_LENGTH,
    MikroStyles,
    ProgrammingLanguages
} from '@paradeigma/graphql';
import type { ImpartialSchemaDefinition, Model, Types } from 'mongoose';
import type { MikroStyle, ProgrammingLanguage } from '@paradeigma/graphql';

export interface MikroDocument {
    _id: Types.ObjectId;
    name: string;
    description: string;
    content: string;
    language: ProgrammingLanguage;
    style: MikroStyle;
    rating: number;
}

const mikroSchemaFields: ImpartialSchemaDefinition<MikroDocument> = {
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
        enum: ProgrammingLanguages
    },
    style: {
        type: String,
        required: true,
        enum: MikroStyles
    },
    rating: {
        type: Number,
        required: true,
        min: 0
    }
};

const mikroSchema = new Schema<MikroDocument>(mikroSchemaFields);

export default (models['Mikro'] as Model<MikroDocument>) || model<MikroDocument>('Mikro', mikroSchema);
