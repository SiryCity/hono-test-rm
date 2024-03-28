import { createRoute } from 'honox/factory'

export default createRoute(({ render, req: { path } }) =>
  render(
    <div>
      <h1>404</h1>
    </div>,

    { path, title: '404' },
  ),
)
