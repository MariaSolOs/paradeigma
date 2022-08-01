import routes from 'routes';

import Link from 'next/link';
import * as S from './Layout.styled';

// TODO: Add Head component
const Layout: React.FCC = (props) => (
    <>
        <S.Title>Paradigm</S.Title>
        <S.Breadcrumbs>
            <Link { ...routes.home } passHref>
                <S.NavigationLink>Home</S.NavigationLink>
            </Link>
            <Link { ...routes.newSnippet } passHref>
                <S.NavigationLink>New snippet</S.NavigationLink>
            </Link>
        </S.Breadcrumbs>
        {props.children}
    </>
);

export default Layout;