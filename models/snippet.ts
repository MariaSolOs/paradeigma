import { ProgrammingLanguage } from 'graphql-server/sdk';

/**
 * Supported programming languages used in a code snippet.
 */
export const Languages = Object.values(ProgrammingLanguage).filter(lang => 
    isNaN(+lang)
) as Language[];
export type Language = `${ProgrammingLanguage}`;