import { useState } from 'react';
import { getHookedSdk } from 'lib/graphql';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { NextPage } from 'next';

import SearchBar from 'components/search-snippets/SearchBar';

const sdk = getHookedSdk();

const SearchSnippetsPage: NextPage = () => {
    const [query, setQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([ ProgrammingLanguage.Javascript ]);

    const { data } = sdk.useGetSnippets(['getSnippets', query, languageFilter], {
        query,
        languages: languageFilter.length > 0 ? languageFilter : undefined
    });

    console.log(data);

    return (
        <SearchBar
        query={query}
        onQueryChange={query => setQuery(query)}
        languageFilter={languageFilter}
        onLanguageFilterChange={filter => setLanguageFilter(filter)} />
    );
}

export default SearchSnippetsPage;