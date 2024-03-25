import type { FC } from 'hono/jsx'
import { useState } from 'hono/jsx'

export const Counter: FC<{ FOO?: string }> = ({ FOO = 0 }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <div class="bg-blue-300">{typeof window}</div>
      <div class="bg-yellow-300">dotenvの環境変数client: {FOO}</div>
    </div>
  )
}
