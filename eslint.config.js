import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'coverage',
      'public',
      'dist',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
    ],
  },
  eslintPluginPrettierRecommended,
]
