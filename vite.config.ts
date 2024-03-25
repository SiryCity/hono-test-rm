import pages from '@hono/vite-cloudflare-pages'
import dotenv from 'dotenv'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import { ViteToml } from 'vite-plugin-toml'

dotenv.config() // load env vars from .env

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      define: {
        FOO: `"${process.env.FOO}"`,
      },
      plugins: [
        // ViteToml(),
        client(),
      ],
      resolve: { alias: { '~/': __dirname + '/app/' } },
    }
  } else {
    return {
      define: {
        FOO: `"${process.env.FOO}"`,
      },
      plugins: [
        // ViteToml(),
        honox(),
        pages(),
      ],
      resolve: { alias: { '~/': __dirname + '/app/' } },
      build: {
        assetsDir: 'static',
        ssrEmitAssets: true,
      },
    }
  }
})
