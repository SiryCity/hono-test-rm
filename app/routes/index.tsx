import { createRoute } from 'honox/factory'
import env from '~/../.env.toml'
import { SITE_TITLE } from '~/constants/seo'
import testImg from '~/images/ogp.jpg'
import { Counter } from '~/islands/counter'

export default createRoute(({ render, req: { path } }) =>
  render(
    <div>
      <h1 class="text-red-600">Hello, Honox!!</h1>
      <div>こいつはプレビュー</div>
      <Counter />
      <div class="bg-green-300">{typeof window}</div>
      <div class="bg-pink-300">{String(new Date())}</div>
      <div class="bg-yellow-300">dotenvの環境変数server: {env.FOO}</div>
      images
      <img src={testImg} alt="" />
      <a class="bg-red-200 p-2" href="/test">
        /test
      </a>
      <img src="./ogp.jpg" alt="" />
    </div>,
    { path, title: SITE_TITLE },
  ),
)
