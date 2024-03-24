import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client()],
      resolve: { alias: { '~/': __dirname + '/app/' } },
      define: {
        FOO: process.env.FOO,
      },
    }
  } else {
    return {
      plugins: [honox(), pages()],
      resolve: { alias: { '~/': __dirname + '/app/' } },
      define: {
        FOO: process.env.FOO,
      },
      build: {
        assetsDir: 'static',
        ssrEmitAssets: true,
      },
    }
  }
})
