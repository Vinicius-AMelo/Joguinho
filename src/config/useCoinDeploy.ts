import { useContext, useEffect, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels } from './configs'

function useCoinDeploy({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)
  const { updatedCanvas, count, setCount } = useContext(CanvasContext)
  useEffect(() => {
    if (count === 0) {
      const moviment = updatedCanvas.setCanvas(null, move, EPixels.CO)
      if (moviment.isValidMoviment.valid) {
        setCount(1)
        setMove(moviment.nextPosition)
      }
    }
  })

  return { move }
}

export default useCoinDeploy
