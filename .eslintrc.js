module.exports = {
    parser: 'babel-eslint',
    extends: [ 'airbnb', 'prettier' ],
    parserOptions: { sourceType: 'module', ecmaVersion: 2017 },
    plugins: [ 'prettier' ],
    env: { browser: true, node: true, es6: true, jest: true },
    globals: { el: true, render: true },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                bracketSpacing: true,
                tabWidth: 4,
            },
        ],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: [ '.js', '.jsx' ] },
        ],
        'react/jsx-indent': 'off',
    },
};
