import useEventListener from '@use-it/event-listener'
import { useState } from 'react'

import { changeCanvas } from './canvas'
import handleMove from './handleMove'

function useHeroMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)

  useEventListener('keydown', (event: KeyboardEvent) => {
    const nextPosition = handleMove(event.key, move)
    const isValidMoviment = changeCanvas(nextPosition)
    if (isValidMoviment) {
      setMove(nextPosition)
    }
  })

  return { move }
}

export default useHeroMoviment
