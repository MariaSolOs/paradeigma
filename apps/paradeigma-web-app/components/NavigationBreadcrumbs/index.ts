import type { Route } from 'nextjs-routes';

import NavigationBreadcrumbs from './NavigationBreadcrumbs';

export type NavigationLink = {
    title: string;
    route: Exclude<Route, { query: unknown }>['pathname'];
};

export default NavigationBreadcrumbs;
