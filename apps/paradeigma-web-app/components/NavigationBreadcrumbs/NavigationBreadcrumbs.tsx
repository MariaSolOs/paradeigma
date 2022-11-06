import useStyles from './NavigationBreadcrumbs.styles';
import type { NavigationLink } from './index';

import Link from 'next/link';
import { Breadcrumbs } from '@mantine/core';

const navigationLinks: NavigationLink[] = [
    { route: '/', title: 'Home' },
    { route: '/mikro/search', title: 'Search' },
    { route: '/mikro/new', title: 'New mikro' }
];

const NavigationBreadcrumbs = () => {
    const { classes } = useStyles();

    return (
        <Breadcrumbs classNames={{ root: classes.breadcrumbs, separator: classes.separator }}>
            {navigationLinks.map((link) => (
                <Link key={link.title} href={link.route} passHref legacyBehavior>
                    <a className={classes.navLink}>{link.title}</a>
                </Link>
            ))}
        </Breadcrumbs>
    );
};

export default NavigationBreadcrumbs;
