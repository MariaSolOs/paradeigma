import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from '@paradeigma/graphql';

/**
 * @returns The SDK wrapping the GraphQL client for typed operations.
 */
export const getHookedSdk = () => {
    // The root URL depends on whether we're calling this from the browser
    // or the backend.
    const endpointUrl = (process.env['GRAPHQL_ENDPOINT'] || process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']) ?? '';

    const graphQLClient = new GraphQLClient(`${endpointUrl}/api/graphql`);
    return getSdkWithHooks(graphQLClient);
};
