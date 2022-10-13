const path = require('path');

/**
 * @type {import('eslint').ESLint.ConfigData} 
 */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@next/next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
            'tsconfig.eslint.json',
            './apps/*/tsconfig.json',
            './packages/*/tsconfig.json'
        ],
        sourceType: 'module'
    },
    env: {
        es6: true
    },
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: [
        // Don't lint this file
        '.eslintrc.cjs',
        // Don't lint the files from the ace CDN
        '/apps/paradeigma-web-app/public/code-editor',
        // Codegen output files
        '/packages/paradeigma-graphql/src/resolvers-types.ts',
        '/packages/paradeigma-graphql/src/sdk.ts'
    ],
    reportUnusedDisableDirectives: true,
    rules: {
        // Don't leave more than 1 blank line between code blocks
        'no-multiple-empty-lines': [
            'warn', 
            { 
                'max': 1, 
                'maxEOF': 0, 
                'maxBOF': 0 
            }
        ],
        // Indent with 4 spaces, except when listing attributes in JSX
        indent: 'off',
        '@typescript-eslint/indent': [
            'warn',
            4,
            {
                'ignoredNodes': [ 'JSXOpeningElement > JSXAttribute' ],
                'SwitchCase': 1
            }
        ],
        'keyword-spacing': [
            'warn',
            {
                'before': true,
                'after': true
            }
        ],
        'no-multi-spaces': 'warn',
        '@next/next/no-html-link-for-pages': [
            'error', 
            [
                path.join(__dirname, 'apps/paradeigma-apollo-app/pages/'), 
                path.join(__dirname, 'apps/paradeigma-web-app/pages/')
            ]
        ]
    },
    settings: {
        next: {
            rootDir: [
                './apps/paradeigma-apollo-app/',
                './apps/paradeigma-web-app/'
            ]
        }
    }
}
