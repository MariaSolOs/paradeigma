import microCors from 'micro-cors';
import { send } from 'micro';
import { print } from 'graphql';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '@paradeigma/graphql';
import resolvers from 'lib/resolvers';
import mongooseConnection from 'lib/mongoose-connection';
import { GetMikrosDocument } from '@paradeigma/graphql';
import type { NextApiHandler, PageConfig } from 'next';

const cors = microCors();
let cachedHandler: NextApiHandler | undefined = undefined;

const handler: NextApiHandler = async (req, res) => {
    await mongooseConnection;
    
    if (!cachedHandler) {
        const landingPage = process.env['VERCEL_ENV'] === 'development' ? 
            ApolloServerPluginLandingPageLocalDefault({
                footer: false,
                document: print(GetMikrosDocument),
                embed: true
            }) : 
            ApolloServerPluginLandingPageProductionDefault({
                footer: false
            });

        const apolloServer = new ApolloServer({
            typeDefs,
            resolvers,
            plugins: [ landingPage ]
        });

        cachedHandler = await apolloServer.start().then(() => {
            const apolloHandler = apolloServer.createHandler({ path: '/api/graphql' });
            return cors((req, res) => {
                if (req.method === 'OPTIONS') {
                    // Don't trigger the Apollo handler on an OPTIONS preflight request.
                    return send(res, 200, 'ok');
                } else {
                    return apolloHandler(req, res);
                }
            });
        });
    }

    return (cachedHandler as NextApiHandler)(req, res);
}

export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}

export default handler;
