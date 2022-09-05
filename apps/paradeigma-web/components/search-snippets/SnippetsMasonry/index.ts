import type { GetSnippetsQuery } from '@paradeigma/paradeigma-graphql/sdk';

import SnippetsMasonry from './SnippetsMasonry';

export type SnippetsMasonryProps = {
    snippets: GetSnippetsQuery['snippets'];
}

export default SnippetsMasonry;