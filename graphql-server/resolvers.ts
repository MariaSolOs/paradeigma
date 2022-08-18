import Snippet from 'models/mongodb/snippet';
import type { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Mutation: {
        createSnippet: async (_, { name, description, content, language, style }) => {
            const snippet = await Snippet.create({
                name,
                description,
                content,
                language,
                style
            });

            return snippet;
        }
    }
}