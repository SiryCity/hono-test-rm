/** @type {import('prettier').Config} */

export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
}
