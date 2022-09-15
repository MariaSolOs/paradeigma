import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    searchMikros: createRoute('/mikro/search'),
    newMikro: createRoute('/mikro/new'),
    mikro: (id: string) => createRoute('/mikro/[id]', { mikroId: id })
} as const;

export default routes;