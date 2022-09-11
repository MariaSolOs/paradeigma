import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    searchMikros: createRoute('/mikro/search'),
    newMikro: createRoute('/mikro/new')
} as const;

export default routes;