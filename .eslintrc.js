// Reference: https://eslintconfig.dev/cra/typescript-prettier
// Full List of Extension Rules: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        extraFileExtensions: ['.snap'],
        sourceType: 'module',
    },
    ignorePatterns: ['src/assets/**'],
    env: { es6: true },
    extends: [
        'eslint:recommended', // recommended ESLint rules
        'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with Prettier.
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['simple-import-sort', 'import'],
    // default rules
    rules: {
        'no-undef': 'off',
        'no-use-before-define': 'off', // HACK https://github.com/typescript-eslint/typescript-eslint/issues/2540
        '@typescript-eslint/no-use-before-define': ['warn'], // HACK https://github.com/typescript-eslint/typescript-eslint/issues/2540
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-explicit-any': [
            'error',
            { ignoreRestArgs: true },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        // sorting
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
    overrides: [
        // sort imports
        {
            files: ['*.tsx', '*.ts'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            'builtin',
                            'internal',
                            'external',
                            'sibling',
                            'parent',
                            'index',
                        ],
                    },
                ],
            },
        },
        // declarations overrides
        {
            files: ['config-overrides.js', 'src/**/*.interface.ts'],
            parser: '@typescript-eslint/parser',
            rules: {
                'unicorn/filename-case': 'off',
                '@typescript-eslint/no-empty-interface': 'off',
            },
        },
        // server files overrides
        {
            files: ['server.js', 'server/*.js', 'src/setupProxy.js'],
            parser: '@typescript-eslint/parser',
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            },
        },
    ],
};
