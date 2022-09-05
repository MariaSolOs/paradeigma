import type { SchemaDefinitionProperty } from 'mongoose';

declare module 'mongoose' {
    // Similar to SchemaDefinition but requires every key in T to 
    // also be defined in the schema.
    type ImpartialSchemaDefinition<T> = {
        [key in keyof T]: SchemaDefinitionProperty<T[key]>;
    }
}