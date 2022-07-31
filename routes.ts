import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    newSnippet: createRoute('/snippet/new')
}

export default routes;