import type { Route } from 'nextjs-routes';

import NavigationBreadcrumbs from './NavigationBreadcrumbs';

export type NavigationLink = {
    title: string;
    route: Route;
}

export default NavigationBreadcrumbs;