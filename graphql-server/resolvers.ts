import Snippet from 'models/mongodb/snippet';
import { getFuse, addToFuseCollection } from 'lib/fuse';
import type Fuse from 'fuse.js';
import type { Resolvers } from './resolvers-types';
import { ProgrammingLanguage } from './sdk';

export const resolvers: Resolvers = {
    Snippet: {
        id: snippet => snippet._id.toString()
    },

    Query: {
        snippets: async (_, { query, languages }) => {
            const fuse = await getFuse();

            const filters: Fuse.Expression[] = [];

            // If we have a query string, use it to search a snippet with a matching
            // name or description.
            if (query) {
                filters.push({
                    $or: [
                        { name: query },
                        { description: query }
                    ]
                });
            }

            // By default use all programming languages.
            filters.push({
                language: (languages ?? Object.values(ProgrammingLanguage)).map(lang => `=${lang}`).join(' | ')
            });

            const searchResults = fuse.search({ $and: filters });

            return searchResults.map(result => result.item);
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