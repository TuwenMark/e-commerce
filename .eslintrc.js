module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    // Automatically select the type of endOfLine according to file content (CRLF \r\n/LF \n)
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
