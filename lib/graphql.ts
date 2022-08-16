import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from 'graphql-server/sdk';

/**
 * @returns The SDK wrapping the GraphQL client for typed operations.
 */
export const getHookedSdk = () => {
    const graphQLClient = new GraphQLClient(`${process.env['VERCEL_URL']}/api/graphql`);
    return getSdkWithHooks(graphQLClient);
}