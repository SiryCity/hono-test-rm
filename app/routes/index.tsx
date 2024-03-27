import type { FC } from 'hono/jsx'
import env from '~/../.env.toml'
import testImg2 from '~/../static/ogp.jpg'
import testImg1 from '~/images/test.jpg'
import { Counter } from '~/islands/counter'

const route: FC = () => (
  <div>
    <h1 class="text-red-600">Hello, Honox!!preview</h1>
    <Counter />
    <div class="bg-green-300">{typeof window}</div>
    <div class="bg-pink-300">{String(new Date())}</div>
    <div class="bg-yellow-300">dotenvの環境変数server: {env.FOO}</div>

    <img src={testImg1} alt="" />
    <img src={testImg2} alt="" />
  </div>
)

export default route

export const title = 'Honox'
