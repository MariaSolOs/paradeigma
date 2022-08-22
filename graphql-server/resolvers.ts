import Snippet from 'models/mongodb/snippet';
import { getFuse, addToFuseCollection } from 'lib/fuse';
import type { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Snippet: {
        id: snippet => snippet._id.toString()
    },

    Query: {
        snippets: async (_, { query, languages }) => {
            const snippetsWithLanguages = await Snippet.find({
                language: { $in: languages }
            }).lean();

            return snippetsWithLanguages;
        }
    },

    Mutation: {
        createSnippet: async (_, { name, description, content, language, style }) => {
            const snippet = await Snippet.create({
                name,
                description,
                content,
                language,
                style
            });
            
            await addToFuseCollection(snippet);
            
            return snippet;
        }
    }
}