import { createRoute } from 'honox/factory'

export default createRoute(({ render, req: { path } }) =>
  render(
    <div>
      <h1>Hello!!</h1>
    </div>,

    { path, title: 'テストページ' },
  ),
)
