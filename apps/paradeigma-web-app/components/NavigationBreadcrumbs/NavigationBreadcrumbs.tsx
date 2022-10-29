import type { NavigationLink } from './index';

import Link from 'next/link';
import * as S from './NavigationBreadcrumbs.styled';

const navigationLinks: NavigationLink[] = [
    { route: '/', title: 'Home' },
    { route: '/mikro/search', title: 'Search' },
    { route: '/mikro/new', title: 'New mikro' }
];

const NavigationBreadcrumbs = () => (
    <S.Breadcrumbs>
        {navigationLinks.map((link) => (
            <Link key={link.title} href={link.route} passHref legacyBehavior>
                <S.NavigationLink>{link.title}</S.NavigationLink>
            </Link>
        ))}
    </S.Breadcrumbs>
);

export default NavigationBreadcrumbs;
