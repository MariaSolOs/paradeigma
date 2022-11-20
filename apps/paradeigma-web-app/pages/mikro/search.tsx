import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { useDebouncedValue } from '@mantine/hooks';
import { getHookedSdk } from 'lib/graphql';
import type { GetStaticProps, NextPage } from 'next';
import type { SearchBarFormValues } from 'components/search-mikros/SearchBar';
import type { GetMikrosQuery, ProgrammingLanguage } from '@paradeigma/graphql';

import SearchBar from 'components/search-mikros/SearchBar';
import MikrosMasonry from 'components/search-mikros/MikrosMasonry';

type SearchMikrosPageProps = { initialMikros: GetMikrosQuery };

const sdk = getHookedSdk();

export const getStaticProps: GetStaticProps<SearchMikrosPageProps> = async () => {
    // Get 50 random mikros to display initially.
    const initialMikros = await sdk.getMikros({});
    initialMikros.mikros = initialMikros.mikros.slice(0, 50);

    return {
        props: { initialMikros },
        revalidate: 60 * 60 // Re-generate the page every hour
    };
};

const SearchMikrosPage: NextPage<SearchMikrosPageProps> = (props) => {
    const router = useRouter();

    // Grab initial values from the URL query (if any)
    const textFilterQuery = router.query['text'];
    const languageFilterQuery = router.query['languages'];
    const textFilter = (textFilterQuery as string) ?? '';
    const languageFilter = Array.isArray(languageFilterQuery) ?
        (languageFilterQuery as ProgrammingLanguage[]) :
        typeof languageFilterQuery === 'string' ?
        [languageFilterQuery as ProgrammingLanguage] :
        [];

    const form = useForm<SearchBarFormValues>({
        initialValues: { textFilter, languageFilter }
    });
    const [mikros, setMikros] = useState<GetMikrosQuery['mikros']>([]);

    // Debounce the input query by one second so that we don't overwhelm the
    // GraphQL server.
    const [debouncedQuery] = useDebouncedValue(form.values.textFilter, 1000);

    const { data } = sdk.useGetMikros(
        ['getMikros', debouncedQuery, form.values.languageFilter],
        {
            textFilter: debouncedQuery,
            languageFilter: form.values.languageFilter.length > 0 ? form.values.languageFilter : undefined
        },
        { fallbackData: props.initialMikros }
    );

    // For a smooth effect, we first "reset" the masonry by clearing the existing mikros
    // and after a bit we populate (and hence re-trigger the animation) the list with
    // the new ones.
    useEffect(() => {
        setMikros([]);

        const timer = setTimeout(() => {
            setMikros(data?.mikros ?? []);
        }, 400);

        return () => clearTimeout(timer);
    }, [data]);

    const handleMikroClick = (id: string) => {
        void (async () => {
            // Store the state of the current query so that it is used
            // for the initial values when returning to the masonry.
            await router.replace(
                {
                    pathname: '/mikro/search',
                    query: { text: form.values.textFilter, languages: form.values.languageFilter }
                },
                '/mikro/search',
                { shallow: true }
            );

            // Then navigate to the mikro's page.
            await router.push({ pathname: '/mikro/[id]', query: { id } });
        })();
    };

    return (
        <>
            <SearchBar form={form} />
            <MikrosMasonry mikros={mikros} onMikroClick={handleMikroClick} />
        </>
    );
};

export default SearchMikrosPage;
