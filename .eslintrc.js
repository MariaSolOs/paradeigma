/**
 * @type {import('eslint').ESLint.ConfigData} 
 */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
            './tsconfig.eslint.json', 
            './apps/*/tsconfig.json',
            './packages/*/tsconfig.json'
        ]
    },
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: [
        // Don't lint the files with the ace CDN
        '/packages/paradeigma-web-app/public/code-editor',
        // Codegen output files
        '/packages/paradeigma-graphql/src/resolvers-types.ts',
        '/packages/paradeigma-graphql/src/sdk.ts',
        // Don't lint Next configuration files
        '/apps/*/next.config.js'
    ],
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
        indent: [
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
        'no-multi-spaces': 'warn'
    },
    overrides: [
        {
            files: [ './apps/**/*.ts', './apps/**/*.tsx' ],
            extends: [
                'next/core-web-vitals'
            ],
            rules: {
                // TODO: Try to fix these rules having a bunch of false errors
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off'
            }
        }
    ]
}
