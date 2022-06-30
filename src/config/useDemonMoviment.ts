import useInterval from '@use-it/interval'
import { useContext, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels, EWalker } from './constants'

function useDemonMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)
  const updatedCanvas = useContext(CanvasContext)

  function randomMove() {
    const random = Math.floor(Math.random() * 3.99)
    const array = Object.values(EWalker)
    const moviment = updatedCanvas.setCanvas(array[random], move, EPixels.DM)
    if (moviment.isValidMoviment.valid) {
      console.log(moviment)
    } else {
      console.log(array[random])
    }
    return moviment
  }

  useInterval(() => {
    const moviment = randomMove()

    if (moviment.isValidMoviment.valid) {
      setMove(moviment.nextPosition)
    }
    if (moviment.isValidMoviment.dead) {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Morreu Otário')
      })
      window.location.reload()
    }
  }, 2000)

  return { move }
}

export default useDemonMoviment
