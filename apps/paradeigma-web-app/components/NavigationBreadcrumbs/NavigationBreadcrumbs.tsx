import type { NavigationLink } from './index';

import Link from 'next/link';
import * as S from './NavigationBreadcrumbs.styled';

const navigationLinks: NavigationLink[] = [
    { route: { pathname: '/' }, title: 'Home' },
    { route: { pathname: '/mikro/search' }, title: 'Search' },
    { route: { pathname: '/mikro/new' }, title: 'New mikro' }
];

const NavigationBreadcrumbs = () => (
    <S.Breadcrumbs>
        {navigationLinks.map(link => 
            <Link key={link.title} href={link.route} passHref>
                <S.NavigationLink>{link.title}</S.NavigationLink>
            </Link>
        )}
    </S.Breadcrumbs>
);

export default NavigationBreadcrumbs;