import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const textFilterQuery = (router.query['text'] as string) ?? '';
    const languageFilterQuery = (router.query['languages'] as ProgrammingLanguage[]) ?? [];

    const [textFilter, setTextFilter] = useState(textFilterQuery);
    const [languageFilter, setLanguageFilter] = useState<ProgrammingLanguage[]>(languageFilterQuery);
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
        }, 500);

        return () => clearTimeout(timer);
    }, [data]);

    const handleMikroClick = (id: string) => {
        void (async () => {
            // Store the state of the current query so that it is used
            // for the initial values when returning to the masonry.
            await router.replace({
                pathname: '/mikro/search',
                query: { text: textFilter, languages: languageFilter }
            }, '/mikro/search', { shallow: true });

            // Then navigate to the mikro's page.
            await router.push({ pathname: '/mikro/[id]', query: { id } });
        })();
    }

    return (
        <>
            <SearchBar
            textFilter={textFilter}
            onTextFilterChange={filter => setTextFilter(filter)}
            languageFilter={languageFilter}
            onLanguageFilterChange={filter => setLanguageFilter(filter)} />
            <MikrosMasonry mikros={mikros} onMikroClick={handleMikroClick} />
        </>
    );
}

export default SearchMikrosPage;