import routes from 'routes';
import type { NavigationLink } from './index';

import Link from 'next/link';
import * as S from './NavigationBreadcrumbs.styled';

const navigationLinks: NavigationLink[] = [
    { ...routes.home, title: 'Home' },
    { ...routes.searchSnippets, title: 'Search' },
    { ...routes.newSnippet, title: 'New snippet' }
];

const NavigationBreadcrumbs = () => (
    <S.Breadcrumbs>
        {navigationLinks.map(link => 
            <Link key={link.title} href={link.href} as={link.as} passHref>
                <S.NavigationLink>{link.title}</S.NavigationLink>
            </Link>
        )}
    </S.Breadcrumbs>
);

export default NavigationBreadcrumbs;