import Snippet from 'models/mongodb/snippet';
import { getFuse, addToFuseCollection } from 'lib/fuse';
import type Fuse from 'fuse.js';
import type { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Snippet: {
        id: snippet => snippet._id.toString()
    },

    Query: {
        snippets: async (_, { query, languages }) => {
            const fuse = await getFuse();

            const filters: Fuse.Expression[] = [];

            if (query) {
                filters.push({
                    $or: [
                        { name: query },
                        { description: query }
                    ]
                });
            }

            if (languages) {
                filters.push({
                    language: languages.map(lang => `=${lang}`).join(' | ')
                });
            }

            const snippets = fuse.search({ $and: filters });
            console.log(snippets);

            // return snippets;
            return [];
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