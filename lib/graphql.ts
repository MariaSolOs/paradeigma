import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from 'graphql-server/sdk';

/**
 * @returns The SDK wrapping the GraphQL client for typed operations.
 */
export const getHookedSdk = () => {
    // The root URL depends on whether we're calling this from the browser
    // or the backend.
    const rootUrl = (process.env['PARADEIGMA_URL'] || process.env['NEXT_PUBLIC_PARADEIGMA_URL'])!;

    const graphQLClient = new GraphQLClient(`${rootUrl}/api/graphql`);
    return getSdkWithHooks(graphQLClient);
}