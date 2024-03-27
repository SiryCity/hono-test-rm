import type { FC } from 'hono/jsx'
import env from '~/../.env.toml'
import testImg3 from '~/../public/ogp3.jpg'
import testImg2 from '~/../static/ogp2.jpg'
import testImg1 from '~/images/ogp1.jpg'
import { Counter } from '~/islands/counter'

const route: FC = () => (
  <div>
    <h1 class="text-red-600">Hello, Honox!!preview</h1>
    <Counter />
    <div class="bg-green-300">{typeof window}</div>
    <div class="bg-pink-300">{String(new Date())}</div>
    <div class="bg-yellow-300">dotenvの環境変数server: {env.FOO}</div>
    images
    <img src={testImg1} alt="" />
    static
    <img src={testImg2} alt="" />
    public
    <img src={testImg3} alt="" />
  </div>
)

export default route

export const title = 'Honox'
