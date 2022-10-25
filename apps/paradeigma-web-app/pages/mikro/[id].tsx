import { useRouter } from 'next/router';
import { getHookedSdk } from 'lib/graphql';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { GetMikroQuery } from '@paradeigma/graphql';
import type { RoutedQuery } from 'nextjs-routes';

import Spinner from 'components/Spinner';
import { CodeColumn, Container, MainContainer, MikroContainer } from 'components/mikro-details/Containers';
import Button from 'components/Button';
import SnippetButton from 'components/mikro-details/SnippetButton';
import MikroCode from 'components/MikroCode';
import Details from 'components/mikro-details/Details';

type MikroDetailsUrlQuery = RoutedQuery<'/mikro/[id]'>;
type MikroDetailsPageProps = { mikro: GetMikroQuery['mikro'] };

const sdk = getHookedSdk();

export const getStaticProps: GetStaticProps<MikroDetailsPageProps, MikroDetailsUrlQuery> = async (context) => {
    const { id } = context.params as MikroDetailsUrlQuery;

    const { mikro } = await sdk.getMikro({ id });

    return {
        props: { mikro },
        revalidate: 60 * 60 // Re-generate the page every hour
    };
};

export const getStaticPaths: GetStaticPaths<MikroDetailsUrlQuery> = async () => {
    const { mikros } = await sdk.getMikros({});
    // Only pre-generate 50 mikros with the highest ratings.
    const topMikros = mikros.slice(0, 50);

    return {
        paths: topMikros.map(({ id }) => ({
            params: { id }
        })),
        fallback: true
    };
};

const MikroDetailsPage: NextPage<MikroDetailsPageProps> = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner open />;
    }

    return (
        <Container>
            <Button onClick={router.back}>Go back</Button>
            <MainContainer>
                <CodeColumn>
                    <MikroContainer>
                        <MikroCode
                            content={props.mikro.content}
                            language={props.mikro.language}
                            style={props.mikro.style}
                            containerStyles={{
                                width: '100%',
                                margin: 0
                            }}
                        />
                    </MikroContainer>
                    <SnippetButton editor="VSCode" />
                </CodeColumn>
                <Details
                    name={props.mikro.name}
                    description={props.mikro.description}
                    language={props.mikro.language}
                />
            </MainContainer>
        </Container>
    );
};

export default MikroDetailsPage;
