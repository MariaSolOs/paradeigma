import { GraphQLClient } from 'graphql-request';

/**
 * @returns A client to query the GraphQL endpoint.
 */
export const getGraphQLClient = () => new GraphQLClient(`${process.env['VERCEL_URL']}/api/graphql`);