import { createRoute } from 'honox/factory'
// import env from '~/../.env.toml'
import { Counter } from '~/islands/counter'

export default createRoute(c => {
  const name = c.req.query('name') ?? 'Hono'

  return c.render(
    <div>
      <h1 class="text-red-600">Hello, {name}!!</h1>
      <Counter />
      <div class="bg-green-300">{typeof window}</div>
      <div class="bg-pink-300">{String(new Date())}</div>
      <div class="bg-yellow-300">dotenvの環境変数server: {process.env.FOO}</div>
    </div>,

    { title: name },
  )
})
