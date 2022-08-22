import Fuse from 'fuse.js';
import Snippet from 'models/mongodb/snippet';
import type { SnippetDocument } from 'models/mongodb/snippet';
import type { LeanDocument, Types } from 'mongoose';

type SnippetFuse = Fuse<LeanDocument<SnippetDocument & { _id: Types.ObjectId }>>;

let fuse: SnippetFuse | undefined = undefined;

/**
 * @returns The lazy initialized instance of Fuse for searching snippets.
 */
export const getFuse = async (): Promise<SnippetFuse> => {
    if (fuse === undefined) {
        const allSnippets = await Snippet.find({}).lean();
        fuse = new Fuse(allSnippets, {
            keys: [ // TODO: Make sure these weights make sense
                { name: 'name', weight: 0.6 },
                { name: 'description', weight: 0.4 },
                { name: 'language', weight: 1 }
            ],
            findAllMatches: true // TODO: Check if this is needed
        });
    }

    return fuse;
}

/**
 * Adds the given snippet to the Fuse collection.
 * 
 * @param snippet - The snippet to add
 */
export const addToFuseCollection = async (snippet: SnippetDocument) => {
    const fuse = await getFuse();
    fuse.add(snippet);
}