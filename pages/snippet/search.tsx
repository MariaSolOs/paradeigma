import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import { getHookedSdk } from 'lib/graphql';
import type { ProgrammingLanguage } from 'graphql-server/sdk';
import type { GetSnippetsQuery } from 'graphql-server/sdk';
import type { NextPage, GetStaticProps } from 'next';

import SearchBar from 'components/search-snippets/SearchBar';
import SnippetsMasonry from 'components/search-snippets/SnippetsMasonry';

type SearchSnippetsPageProps = {
    initialSnippets: GetSnippetsQuery;
}

const sdk = getHookedSdk();

export const getStaticProps: GetStaticProps<SearchSnippetsPageProps> = async () => {
    // Get 50 random snippets to display initially.
    const initialSnippets = await sdk.getSnippets({});
    initialSnippets.snippets = initialSnippets.snippets.slice(0, 50);

    return {
        props: { initialSnippets },
        revalidate: 60 * 60 // Re-generate the page every hour
    }
}

const SearchSnippetsPage: NextPage<SearchSnippetsPageProps> = (props) => {
    const [query, setQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([]);
    const debouncedQuery = useDebounce(query, 1000);

    const { data } = sdk.useGetSnippets(['getSnippets', debouncedQuery, languageFilter], {
        query: debouncedQuery,
        languages: languageFilter.length > 0 ? languageFilter : undefined
    }, { fallbackData: props.initialSnippets });

    return (
        <>
            <SearchBar
            query={query}
            onQueryChange={query => setQuery(query)}
            languageFilter={languageFilter}
            onLanguageFilterChange={filter => setLanguageFilter(filter)} />
            <SnippetsMasonry snippets={data!.snippets} />
        </>
    );
}

export default SearchSnippetsPage;