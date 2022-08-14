import mongooseConnection from 'lib/mongoose-connection';
import type { NextApiHandler } from 'next';
 
const handler: NextApiHandler = async () => {
    await mongooseConnection();
}

export default handler;