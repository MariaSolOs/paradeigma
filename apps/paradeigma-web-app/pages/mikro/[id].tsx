import { useRouter } from 'next/router';
import { getHookedSdk } from 'lib/graphql';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { GetMikroQuery } from '@paradeigma/graphql';
import type { RoutedQuery } from 'nextjs-routes';

import Box from '@mui/material/Box';
import Button from 'components/Button';
import Details from 'components/mikro-details/Details';

type MikroDetailsUrlQuery = RoutedQuery<'/mikro/[id]'>;
type MikroDetailsPageProps = { mikro: GetMikroQuery['mikro']; }

const sdk = getHookedSdk();

export const getStaticProps: GetStaticProps<MikroDetailsPageProps, MikroDetailsUrlQuery> = async (context) => {
    const { id } = context.params as MikroDetailsUrlQuery;

    const { mikro } = await sdk.getMikro({ id });

    return {
        props: { mikro },
        revalidate: 60 * 60 // Re-generate the page every hour
    }
}

export const getStaticPaths: GetStaticPaths<MikroDetailsUrlQuery> = async () => {
    const { mikros } = await sdk.getMikros({});
    // Only pre-generate 50 mikros with the highest ratings.
    const topMikros = mikros.slice(0, 50);

    return {
        paths: topMikros.map(({ id }) => ({
            params: { id }
        })),
        fallback: true
    }
}

const MikroDetailsPage: NextPage<MikroDetailsPageProps> = (props) => {
    const router = useRouter();

    // TODO: Add a real fallback (spinner?) here
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <Box sx={{ width: { xs: '95vw', md: '85vw' }, margin: '0 auto' }}>
            <Button onClick={router.back}>Go back</Button>
            <Details mikro={props.mikro} />
        </Box>
    );
}

export default MikroDetailsPage;