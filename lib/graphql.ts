import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from 'graphql-server/sdk';

/**
 * @returns The SDK wrapping the GraphQL client for typed operations.
 */
export const getHookedSdk = () => {
    // The root URL depends on whether we're calling this from the browser
    // or the backend.
    const vercelUrl = process.env['VERCEL_URL'] || process.env['NEXT_PUBLIC_VERCEL_URL'];
    console.log('VERCEL URL', vercelUrl); // TODO: Delete this when I make sure it works in production
    const graphQLClient = new GraphQLClient(`${vercelUrl}/api/graphql`);
    return getSdkWithHooks(graphQLClient);
}