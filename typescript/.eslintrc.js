/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'warn', // Good rule, but shouldn't be an error
    '@typescript-eslint/no-empty-function': 'warn', // Fine, but shouldn't be an error
    '@typescript-eslint/no-empty-interface': 'off', // Often used as preparation for future changes
    '@typescript-eslint/no-explicit-any': 'off', // This is needed in specific scenario's, so no error plz
    '@typescript-eslint/no-extra-semi': 'warn', // Fine, but shouldn't be an error
    '@typescript-eslint/no-inferrable-types': 'off', // I'll explicitly type what I want, whenever I want, damnit
    '@typescript-eslint/no-namespace': 'warn', // Understandable, but no, we'll use namespaces for a variety of usages
    '@typescript-eslint/no-non-null-assertion': 'off', // This is needed in a multitude of scenario's, I'm not filling my code with eslint comments
    '@typescript-eslint/no-unused-vars': 'off', // TS already tells us this
    'quotes': ['warn', 'single'], // Single quotes!
    'comma-dangle': ['warn', 'always-multiline'], // Trailing comma's FTW
    'import/default': 'off', // TS warns us already about this
    'import/named': 'off', // Good rule but doesn't see renames directly which is pretty annoying, also TS will help us anyway
    'import/namespace': 'off', // Seems to be giving false positives, also gives false positives
    'import/no-unresolved': 'off', // TS warns us about unresolvable imports
    'import/order': ['warn', {
      'groups': [
        ['builtin', 'external'], // All nodes_modules imports
        'internal', // TS-config alias paths
        ['parent', 'index'], // First parents, not too sure about the index files
        'sibling', // Then siblings
        'object', // Probably never used, e.g. import log = import.log
        'unknown',  // Whatever else?
      ],
      'alphabetize': { 'order': 'asc', 'caseInsensitive': true }, // Always alphabetize each group by path, makes PR's a lot easier
      'warnOnUnassignedImports': true, // We should not have import code that is dependent on side-effects and their order, so import '...'; is also checked
    }],
    'indent': ['warn', 2, { 'SwitchCase': 1 }], // Indentation should be 2
    'no-constant-condition': ['warn', { 'checkLoops': false }], // Good rule, but constants in loops are fine
    'no-empty-pattern': 'warn', // Fine, but shouldn't be an error
    'no-empty': ['warn', { 'allowEmptyCatch': true }], // Fine, but shouldn't be an error and we'll allow empty catches since we need them often
    'no-inner-declarations': 'off', // Strange rule, will also error when declaring a non-exported function inside a namespace
    'no-undef': 'off', // TS will warn us more correctly about this
    'no-useless-catch': 'off', // Well, if we ever write a useless catch, there is a clear reason why we'd do that
    'no-useless-escape': 'warn', // Good rule, but shouldn't be an error
    'no-var': 'warn', // Don't use var, but let or const instead
    'prefer-const': 'warn', // Good rule, but shouldn't be an error
    'semi': ['warn', 'always'], // Always end a line with a semi-colon
    'no-restricted-imports': ['warn', {
      paths: [{
        // Don't allow import to your own index file
        name: '.',
        message: 'Don\'t use an import to your own or a parent index file, it creates a circular dependency',
      }, {
        // Don't allow import to a parent index file
        name: '..',
        message: 'Don\'t use an import to your own or a parent index file, it creates a circular dependency',
      }],
      // We might specify more, but I don't feel that's necessary
    }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // Tells eslint to resolve paths using typescript configuration
      'typescript': {},
    },
  },
  ignorePatterns: ['/dist/**'],
};
