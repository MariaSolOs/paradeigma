declare module 'mongoose' {
    // Make mongoose's definition more strict by requiring every key in
    // T to also be defined in the schema (expect for the ID, which is
    // added automatically).
    type SchemaDefinition<T> = Omit<{ [key in keyof T]: SchemaDefinitionProperty<T[key]> }, '_id'>;
}
