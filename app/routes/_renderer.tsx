import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import env from '~/../.env.toml'
import {
  DEFAULT_OGP_IMG,
  PIPE,
  SITE_DESCRIPTION,
  SITE_POSTFIX,
  SITE_TITLE,
} from '~/constants/seo'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from '~/style.css?url'

export default jsxRenderer(
  ({ children, title, description = null, path = null }) => {
    // 環境
    const ENVIRONMENT = env.ENVIRONMENT
    const URL_PROD = env.URL_PROD
    const isProd = ENVIRONMENT === 'PROD'

    // パス名
    const pathname = path === '/' ? '' : path
    // ページ別タイトルの前 間違い防止のため本番環境以外は環境名を表示
    const pre = isProd ? '' : '【確認用】 '
    // ページ別タイトルの後 トップページ以外はサイト自身のタイトルを表示
    const post = pathname ? PIPE + SITE_TITLE : SITE_POSTFIX
    // 実際に表示されるタイトル
    const metaTitle = pre + title + post
    // 実際に表示されるディスクリプション
    const metaDescription = description ?? SITE_DESCRIPTION

    return (
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{metaTitle}</title>
          <link href={styles} rel="stylesheet" />
          <Script src="/app/client.ts" async />
          <Style />

          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content={pathname ? 'article' : 'website'} />
          <meta property="og:url" content={URL_PROD + pathname} />
          <meta
            property="og:image"
            content={URL_PROD + '/' + DEFAULT_OGP_IMG}
          />
          <meta property="og:site_name" content={metaTitle} />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="icon"
            href="/favicon.svg"
            sizes="any"
            type="image/svg+xml"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="canonical" href={URL_PROD + pathname} />
          <meta name="robots" content={isProd ? 'noindex' : 'noindex'} />
        </head>

        <body>{children}</body>
      </html>
    )
  },
)
