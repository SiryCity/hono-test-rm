import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from '~/style.css?url'

export default jsxRenderer(({ children, title }) => (
  <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link href={styles} rel="stylesheet" />
      <Script src="/app/client.ts" async />
      <Style />

      <meta name="robots" content="noindex" />
    </head>

    <body>{children}</body>
  </html>
))
