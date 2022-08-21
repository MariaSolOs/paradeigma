import { useState } from 'react';
import { getHookedSdk } from 'lib/graphql';
import { ProgrammingLanguage } from 'graphql-server/sdk';
import type { NextPage } from 'next';

import SearchBar from 'components/search-snippets/SearchBar';

const sdk = getHookedSdk();

const SearchSnippetsPage: NextPage = () => {
    const [query, setQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([ ProgrammingLanguage.Javascript ]);

    const handleQueryChange = (query: string) => {
        setQuery(query);
    }

    return (
        <SearchBar
        query={query}
        onQueryChange={handleQueryChange}
        languageFilter={languageFilter}
        onLanguageFilterChange={filter => setLanguageFilter(filter)} />
    );
}

export default SearchSnippetsPage;