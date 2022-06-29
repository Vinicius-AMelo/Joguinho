import useInterval from '@use-it/interval'
import { useContext, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels, EWalker } from './constants'

function useEnemyMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)
  const updatedCanvas = useContext(CanvasContext)

  useInterval(() => {
    const random = Math.floor(Math.random() * 3.99)
    const array = Object.values(EWalker)
    const tora = updatedCanvas.setCanvas(array[random], move, EPixels.DM)
    if (tora.isValidMoviment.valid) {
      setMove(tora.nextPosition)
    }
  }, 2000)

  return { move }
}

export default useEnemyMoviment
