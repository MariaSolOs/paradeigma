import { useRouter } from 'next/router';
import { getHookedSdk } from 'lib/graphql';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { GetMikroQuery } from '@paradeigma/graphql';

import MikroCode from 'components/MikroCode';
import Details from 'components/mikro-details/Details';

type MikroDetailsUrlQuery = { id: string; }

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
        <Details name={props.mikro.name} description={props.mikro.description}>
            <MikroCode 
            content={props.mikro.content}
            language={props.mikro.language}
            style={props.mikro.style}
            containerStyles={{ width: '100%' }} />
        </Details>
    );
}

export default MikroDetailsPage;