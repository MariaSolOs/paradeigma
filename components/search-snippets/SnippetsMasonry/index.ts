import type { GetSnippetsQuery } from 'graphql-server/sdk';

import SnippetsMasonry from './SnippetsMasonry';

export type SnippetsMasonryProps = {
    snippets: GetSnippetsQuery['snippets'];
}

export default SnippetsMasonry;