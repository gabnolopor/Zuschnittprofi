module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    // React rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    
    // General rules
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}; 