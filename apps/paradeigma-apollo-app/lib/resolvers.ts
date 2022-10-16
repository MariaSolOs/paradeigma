import { Mikro } from '@paradeigma/mongoose';
import { ProgrammingLanguages } from '@paradeigma/graphql';
import { LazyFuse } from 'lib/fuse';
import { ApolloError } from 'apollo-server-core';
import type Fuse from 'fuse.js';
import type { MikroDocument } from '@paradeigma/mongoose';
import type { Resolvers } from '@paradeigma/graphql';
import type { LeanDocument, Types } from 'mongoose';

const mikroFuse = new LazyFuse<LeanDocument<MikroDocument & { _id: Types.ObjectId }>>({
    listProvider: async () => Mikro.find({}).lean(),
    fuseOptions: {
        keys: [ 'name', 'content', 'language' ],
        useExtendedSearch: true
    }
});

const resolvers: Resolvers = {
    Mikro: {
        id: mikro => mikro._id.toString()
    },

    Query: {
        mikros: async (_, { textFilter, languageFilter }) => {
            const fuse = await mikroFuse.getFuse();

            const filters: Fuse.Expression[] = [];

            // If we have a text filter, use it to search a mikro with a matching
            // name or code content.
            if (textFilter) {
                filters.push({
                    $or: [
                        { name: textFilter },
                        { content: textFilter }
                    ]
                });
            }

            // By default use all programming languages.
            filters.push({
                language: (languageFilter ?? ProgrammingLanguages).map(lang => `=${lang}`).join(' | ')
            });

            const searchResults = fuse.search({ $and: filters });

            return searchResults.map(result => result.item);
        },

        mikro: async (_, { id }) => {
            const mikro = await Mikro.findById(id).lean();

            if (mikro === null) {
                throw new ApolloError(`Mikro with ID ${id} not found.`, '404');
            }

            return mikro;
        }
    },

    Mutation: {
        createMikro: async (_, { name, description, content, language, style }) => {
            // Initially all mikros have a perfect (5) rating.
            const totalMikros = Math.min(await Mikro.estimatedDocumentCount(), 1);
            const rating = 5 / totalMikros;

            const mikro = await Mikro.create({
                name,
                description,
                content,
                language,
                style,
                rating
            });

            // Add the mikro to the Fuse collection.
            (await mikroFuse.getFuse()).add(mikro);

            return mikro;
        }
    }
}

export default resolvers;