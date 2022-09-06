import Fuse from 'fuse.js';
import { Snippet } from '@paradeigma-mongoose';
import type { LeanDocument, Types } from 'mongoose';
import type { SnippetDocument } from '@paradeigma-mongoose';

type SnippetFuse = Fuse<LeanDocument<SnippetDocument & { _id: Types.ObjectId }>>;

let fuse: SnippetFuse | undefined = undefined;

/**
 * @returns The lazy initialized instance of Fuse for searching snippets.
 */
export const getFuse = async (): Promise<SnippetFuse> => {
    if (fuse === undefined) {
        const allSnippets = await Snippet.find({}).lean();
        fuse = new Fuse(allSnippets, {
            keys: [ 'name', 'description', 'language' ],
            useExtendedSearch: true
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