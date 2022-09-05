import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    searchSnippets: createRoute('/snippet/search'),
    newSnippet: createRoute('/snippet/new')
}

export default routes;