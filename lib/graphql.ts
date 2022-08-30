import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from 'graphql-server/sdk';

/**
 * @returns The SDK wrapping the GraphQL client for typed operations.
 */
export const getHookedSdk = () => {
    // The root URL depends on whether we're calling this from the browser
    // or the backend.
    const env = (process.env['VERCEL_ENV'] || process.env['NEXT_PUBLIC_VERCEL_ENV'])!;
    const protocolPrefix = env === 'development' ? 'http://' : 'https://';
    const vercelUrl = (process.env['VERCEL_URL'] || process.env['NEXT_PUBLIC_VERCEL_URL'])!;

    console.log('GRAPHQL CLIENT URL', `${protocolPrefix}${vercelUrl}/api/graphql`)
    const graphQLClient = new GraphQLClient(`${protocolPrefix}${vercelUrl}/api/graphql`);
    return getSdkWithHooks(graphQLClient);
}