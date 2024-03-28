import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import env from '~/../.env.toml'
import {
  PIPE,
  SITE_DESCRIPTION,
  SITE_POSTFIX,
  SITE_TITLE,
} from '~/constants/seo'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from '~/style.css?url'

export default jsxRenderer(({ children, title = null, description = null }) => {
  // 環境
  const ENVIRONMENT = env.ENVIRONMENT
  const URL_PROD = env.URL_PROD
  const isProd = ENVIRONMENT === 'PROD'

  // トップページ FIXME:
  const route = title === SITE_TITLE
  // ページ別タイトルの前 間違い防止のため本番環境以外は環境名を表示
  const pre = isProd ? '' : '【確認用】 '
  // ページ別タイトルの後 トップページ以外はサイト自身のタイトルを表示
  const post = route ? SITE_POSTFIX : PIPE + SITE_TITLE
  // 実際に表示されるタイトル
  const metaTitle = pre + title + post
  // 実際に表示されるディスクリプション
  const metaDescription = description ?? SITE_DESCRIPTION

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metaTitle}</title>
        <link href={styles} rel="stylesheet" />
        <Script src="/app/client.ts" async />
        <Style />

        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content={route ? 'website' : 'article'} />
        {/* <meta property="og:url" content={URL_PROD + path} /> */}
        <meta property="og:image" content={URL_PROD + '/opengraph-image.jpg'} />
        <meta property="og:site_name" content={metaTitle} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* <link rel="canonical" href={URL_PROD + path} /> */}
        <meta name="robots" content={isProd ? 'noindex' : 'noindex'} />
      </head>

      <body>{children}</body>
    </html>
  )
})
