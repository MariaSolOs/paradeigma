import { ApolloServer } from 'apollo-server-micro';
import mongooseConnection from 'lib/mongoose-connection';
import { typeDefs } from 'graphql-server/schema';
import { resolvers } from 'graphql-server/resolvers';
import type { NextApiHandler } from 'next';

let cachedHandler: NextApiHandler | undefined = undefined;
 
const handler: NextApiHandler = async (req, res) => {
    await mongooseConnection();

    if (!cachedHandler) {
        const apolloServer = new ApolloServer({
            typeDefs,
            resolvers
        });

        cachedHandler = await apolloServer.start().then(() => 
            apolloServer.createHandler({ path: '/api/graphql' })
        );
    }

    return cachedHandler!(req, res);
}

export default handler;
