import { ApolloServerPluginLandingPageProductionDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '@paradeigma/graphql';
import resolvers from 'lib/resolvers';
import mongooseConnection from 'lib/mongoose-connection';
import type { NextApiHandler, PageConfig } from 'next';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [
        ApolloServerPluginLandingPageProductionDefault({ footer: false })
    ]
});
const apolloServerStarted = apolloServer.start();

const ORIGIN_PATTERN = new RegExp(/^https?:\/\/(paradeigma-web-app(-mariasolos|-git-main-mariasolos)?\.vercel\.app|localhost:3000)$/);
const ALLOWED_METHODS = [ 'GET', 'POST', 'OPTIONS' ] as const;
const ALLOWED_HEADERS = [ 'Content-Type' ] as const;
const MAX_AGE = 60 * 60 * 24; // 24 hours in seconds

const handler: NextApiHandler = async (req, res) => {
    // CORS validation
    if (typeof req.headers.origin === 'string' && ORIGIN_PATTERN.test(req.headers.origin)) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Vary', 'Origin');
    }

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', ALLOWED_METHODS.join(', '));
        res.setHeader('Access-Control-Allow-Headers', ALLOWED_HEADERS.join(', '));
        res.setHeader('Access-Control-Max-Age', MAX_AGE);

        return res.status(204).end();
    }

    await mongooseConnection;
    await apolloServerStarted;

    return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}

export default handler;
