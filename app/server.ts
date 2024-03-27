import { serveStatic } from '@hono/node-server/serve-static'
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

showRoutes(app)

export default app
