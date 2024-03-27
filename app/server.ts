import { serveStatic } from '@hono/node-server/serve-static'
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

app.use('public/*', serveStatic({ root: './dist' }))

showRoutes(app)

export default app
