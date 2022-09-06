import type { GetSnippetsQuery } from '@paradeigma-graphql';

import SnippetsMasonry from './SnippetsMasonry';

export type SnippetsMasonryProps = {
    snippets: GetSnippetsQuery['snippets'];
}

export default SnippetsMasonry;