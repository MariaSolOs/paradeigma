import { useState
    // , useEffect 
} from 'react';
// import useDebounce from 'hooks/useDebounce';
// import { getHookedSdk } from 'lib/graphql';
import type { ProgrammingLanguage } from 'graphql-server/sdk';
import type { GetSnippetsQuery } from 'graphql-server/sdk';
import type { NextPage
    // , GetStaticProps 
} from 'next';

import SearchBar from 'components/search-snippets/SearchBar';
import SnippetsMasonry from 'components/search-snippets/SnippetsMasonry';

type SearchSnippetsPageProps = {
    initialSnippets: GetSnippetsQuery;
}

// const sdk = getHookedSdk();

// export const getStaticProps: GetStaticProps<SearchSnippetsPageProps> = async () => {
//     // Get 50 random snippets to display initially.
//     const initialSnippets = await sdk.getSnippets({});
//     initialSnippets.snippets = initialSnippets.snippets.slice(0, 50);

//     return {
//         props: { initialSnippets },
//         revalidate: 60 * 60 // Re-generate the page every hour
//     }
// }

const SearchSnippetsPage: NextPage<SearchSnippetsPageProps> = () => {
// const SearchSnippetsPage: NextPage<SearchSnippetsPageProps> = (props) => {
    const [query, setQuery] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([]);
    const [snippets, _] = useState<GetSnippetsQuery['snippets']>([]);
    // const [snippets, setSnippets] = useState<GetSnippetsQuery['snippets']>([]);

    // Debounce the input query by one second so that we don't overwhelm the 
    // GraphQL server.
    // const debouncedQuery = useDebounce(query, 1000);

    // const { data } = sdk.useGetSnippets(['getSnippets', debouncedQuery, languageFilter], {
    //     query: debouncedQuery,
    //     languages: languageFilter.length > 0 ? languageFilter : undefined
    // }, { fallbackData: props.initialSnippets });

    // For a smooth effect, we first "reset" the masonry by clearing the existing snippets 
    // and after a bit we populate (and hence re-trigger the animation) the list with 
    // the new ones.
    // useEffect(() => {
    //     setSnippets([]);

    //     const timer = setTimeout(() => {
    //         setSnippets(data?.snippets ?? []);
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, [data]); 

    return (
        <>
            <SearchBar
            query={query}
            onQueryChange={query => setQuery(query)}
            languageFilter={languageFilter}
            onLanguageFilterChange={filter => setLanguageFilter(filter)} />
            <SnippetsMasonry snippets={snippets} />
        </>
    );
}

export default SearchSnippetsPage;