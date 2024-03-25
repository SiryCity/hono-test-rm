import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import { ViteToml } from 'vite-plugin-toml'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      define: {
        FOO: `"${process.env.FOO}"`,
      },
      plugins: [client()],
      resolve: { alias: { '~/': __dirname + '/app/' } },
    }
  } else {
    return {
      define: {
        FOO: `"${process.env.FOO}"`,
      },
      plugins: [ViteToml(), honox(), pages()],
      resolve: { alias: { '~/': __dirname + '/app/' } },
      build: {
        assetsDir: 'static',
        ssrEmitAssets: true,
      },
    }
  }
})
