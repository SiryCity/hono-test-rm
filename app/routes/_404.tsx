import type { NotFoundHandler } from 'hono/types'

const handler: NotFoundHandler = c =>
  c.render(<h1>404 not found</h1>, { title: 'ページが見つかりません' })

export default handler
