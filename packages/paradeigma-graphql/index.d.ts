import type { DocumentNode } from 'graphql';

export * from './src/sdk'; 
export const typeDefs: DocumentNode;
export const MIKRO_NAME_MAX_LENGTH: 30;
export const MIKRO_DESCRIPTION_MAX_LENGTH: 100;
export type { Resolvers } from './src/resolvers-types';