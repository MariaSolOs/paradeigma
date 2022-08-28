import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import { getHookedSdk } from 'lib/graphql';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { NextPage } from 'next';

import SearchBar from 'components/search-snippets/SearchBar';
import SnippetsMasonry from 'components/search-snippets/SnippetsMasonry';

const sdk = getHookedSdk();

const SearchSnippetsPage: NextPage = () => {
    const [query, setQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([ ProgrammingLanguage.Javascript ]);
    const debouncedQuery = useDebounce(query, 3 * 1000);

    const { data } = sdk.useGetSnippets(['getSnippets', debouncedQuery, languageFilter], {
        query: debouncedQuery
        // languages: languageFilter.length > 0 ? languageFilter : undefined
    });

    return (
        <>
            <SearchBar
            query={query}
            onQueryChange={query => setQuery(query)}
            languageFilter={languageFilter}
            onLanguageFilterChange={filter => setLanguageFilter(filter)} />
            {data && <SnippetsMasonry snippets={data.snippets} />}
        </>
    );
}

export default SearchSnippetsPage;