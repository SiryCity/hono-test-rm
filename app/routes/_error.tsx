import type { ErrorHandler } from 'hono/types'

const handler: ErrorHandler = (e, c) =>
  c.render(<h1>Error!</h1>, { title: 'エラー' })

export default handler
