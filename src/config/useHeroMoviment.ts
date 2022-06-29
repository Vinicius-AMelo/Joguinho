import useEventListener from '@use-it/event-listener'
import { useState } from 'react'

function useHeroMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setMove({ x: move.x - 1, y: move.y })
    }
    if (event.key === 'ArrowRight') {
      setMove({ x: move.x + 1, y: move.y })
    }
    if (event.key === 'ArrowUp') {
      setMove({ x: move.x, y: move.y - 1 })
    }
    if (event.key === 'ArrowDown') {
      setMove({ x: move.x, y: move.y + 1 })
    }
  })

  console.log(move)
  return { move }
}

export default useHeroMoviment
