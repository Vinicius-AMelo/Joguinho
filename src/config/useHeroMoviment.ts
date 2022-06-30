import useEventListener from '@use-it/event-listener'
import { useContext, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels } from './constants'

function useHeroMoviment({ initialPosition }) {
  const updatedCanvas = useContext(CanvasContext)

  const [move, setMove] = useState(initialPosition)

  useEventListener('keydown', (event: KeyboardEvent) => {
    const tora = updatedCanvas.setCanvas(event.key, move, EPixels.HR)

    if (tora.isValidMoviment.valid) {
      setMove(tora.nextPosition)
    }
    if (tora.isValidMoviment.dead) {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Morreu Otário')
      }, 1)
      window.location.reload()
    }
  })

  return { move }
}

export default useHeroMoviment
