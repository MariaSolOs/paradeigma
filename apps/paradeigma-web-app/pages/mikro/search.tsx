import { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';
import { getHookedSdk } from 'lib/graphql';
import type { ProgrammingLanguage, GetMikrosQuery } from '@paradeigma/graphql';
import type { NextPage, GetStaticProps } from 'next';

import SearchBar from 'components/search-mikros/SearchBar';
import MikrosMasonry from 'components/search-mikros/MikrosMasonry';

type SearchMikrosPageProps = { initialMikros: GetMikrosQuery; }

const sdk = getHookedSdk();

export const getStaticProps: GetStaticProps<SearchMikrosPageProps> = async () => {
    // Get 50 random mikros to display initially.
    const initialMikros = await sdk.getMikros({});
    initialMikros.mikros = initialMikros.mikros.slice(0, 50);

    return {
        props: { initialMikros },
        revalidate: 60 * 60 // Re-generate the page every hour
    }
}

const SearchMikrosPage: NextPage<SearchMikrosPageProps> = (props) => {
    const [textFilter, setTextFilter] = useState('');
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>([]);
    const [mikros, setMikros] = useState<GetMikrosQuery['mikros']>([]);
    
    // Debounce the input query by one second so that we don't overwhelm the 
    // GraphQL server.
    const debouncedQuery = useDebounce(textFilter, 1000);

    const { data } = sdk.useGetMikros(['getMikros', debouncedQuery, languageFilter], {
        textFilter: debouncedQuery,
        languageFilter: languageFilter.length > 0 ? languageFilter : undefined
    }, { fallbackData: props.initialMikros });

    // For a smooth effect, we first "reset" the masonry by clearing the existing mikros 
    // and after a bit we populate (and hence re-trigger the animation) the list with 
    // the new ones.
    useEffect(() => {
        setMikros([]);

        const timer = setTimeout(() => {
            setMikros(data?.mikros ?? []);
        }, 1000);

        return () => clearTimeout(timer);
    }, [data]); 

    return (
        <>
            <SearchBar
            textFilter={textFilter}
            onTextFilterChange={filter => setTextFilter(filter)}
            languageFilter={languageFilter}
            onLanguageFilterChange={filter => setLanguageFilter(filter)} />
            <MikrosMasonry mikros={mikros} />
        </>
    );
}

export default SearchMikrosPage;