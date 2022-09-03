// import microCors from 'micro-cors';
// import { send } from 'micro';
// import { ApolloServer } from 'apollo-server-micro';
// import mongooseConnection from 'lib/mongoose-connection';
// import { typeDefs } from 'graphql-server/schema';
// import { resolvers } from 'graphql-server/resolvers';
import type { NextApiHandler, PageConfig } from 'next';

// const cors = microCors();
// let cachedHandler: NextApiHandler | undefined = undefined;

const handler: NextApiHandler = async (req, res) => {
    //     await mongooseConnection;

    //  if (!cachedHandler) {
    //         const apolloServer = new ApolloServer({
    //             typeDefs,
    //             resolvers
    //         });

    //         cachedHandler = await apolloServer.start().then(() => {
    //             const apolloHandler = apolloServer.createHandler({ path: '/api/graphql' });
    //             return cors((req, res) => {
    //                 if (req.method === 'OPTIONS') {
    //                     // Don't trigger the Apollo handler on an OPTIONS preflight request.
    //                     return send(res, 200, 'ok');
    //                 } else {
    //                     return apolloHandler(req, res);
    //                 }
    //             });
    //         });
}

//     return cachedHandler!(req, res);
// }

// export const config: PageConfig = {
//     api: {
//         bodyParser: false
//     }
// }

export default handler;
