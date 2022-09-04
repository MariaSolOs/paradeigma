import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './schema/schema.ts',
    documents: [ './fragments/*.graphql', './queries/*.graphql', './mutations/*.graphql' ],
    config: {
        useTypeImports: true
    },
    generates: {
        './schema/introspection.json': {
            plugins: [ 'introspection' ]
        }
    }
}
// generates:
//   # We use this introspection file for the VS Code GraphQL extension to
//   # get the schema's types.
//   ./schema/introspection.json:
//     plugins:
//       - introspection
//     config:
//       minify: true
//   ./sdk.ts:
//     plugins:
//       - typescript
//       - typescript-operations
//       - typescript-graphql-request
//       - plugin-typescript-swr
//     config:
//       skipTypename: true
//   ./resolvers/resolvers-types.ts:
//     config:
//       mappers:
//         Snippet: 'models/snippet#SnippetDocument'
//     plugins:
//       - typescript
//       - typescript-resolvers

export default config;