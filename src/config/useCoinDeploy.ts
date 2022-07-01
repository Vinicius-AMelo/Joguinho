import { useContext, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels } from './configs'

function useCoinDeploy({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)
  const { updatedCanvas, count, setCount } = useContext(CanvasContext)

  function randomDeploy(walker) {
    const moviment = updatedCanvas.setCanvas(null, move, walker)

    if (moviment.isValidMoviment.valid) {
      setMove(moviment.nextPosition)
    }
  }

  if (count === 0) {
    randomDeploy(EPixels.CO)
    setCount(1)
  }

  return { move }
}

export default useCoinDeploy
