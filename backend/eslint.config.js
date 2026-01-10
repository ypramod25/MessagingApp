import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simp from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, "simple-import-sort": simp },
    rules:{
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node }
  }
]);
