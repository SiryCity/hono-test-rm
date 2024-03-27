import { serveStatic } from '@hono/node-server/serve-static'
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

app.use('/opengraph-image.jpg', serveStatic())

showRoutes(app)

export default app
