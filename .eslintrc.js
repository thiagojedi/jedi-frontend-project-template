module.exports = {
  root: true,
  plugins: ['testing-library'],
  extends: [
    'plugin:testing-library/react',
    'plugin:testing-library/recommended',
    'next/core-web-vitals',
    // Add other extends before this line
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/prettier',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Additional rules
  rules: {
    'arrow-body-style': [
      'warn',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'react/prefer-stateless-function': 'error',
    'react/jsx-fragments': ['warn', 'element'],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    curly: ['warn', 'all'],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/lib',
            from: './src/modules',
            message: 'Libs should not depend on modules',
          },
          {
            target: './src/modules',
            from: './src/pages',
            message: 'Modules should not depend on routes',
          },
        ],
      },
    ],
  },
};
