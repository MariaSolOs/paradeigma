declare module 'mongoose' {
    // Similar to SchemaDefinition but requires every key in T to
    // also be defined in the schema.
    type SchemaDefinition<T> = Omit<{ [key in keyof T]: SchemaDefinitionProperty<T[key]> }, '_id'>;
}
