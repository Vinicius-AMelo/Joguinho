/* eslint-disable @typescript-eslint/no-use-before-define */
import useInterval from '@use-it/interval'
import { useContext, useState } from 'react'

import { CanvasContext } from '../store/CanvasContext'
import { EPixels, EWalker } from './configs'

function useMiniDemonMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)
  const updatedCanvas = useContext(CanvasContext)

  function randomMove(walker) {
    const random = Math.floor(Math.random() * 3.99)
    const array = Object.values(EWalker)
    const moviment = updatedCanvas.setCanvas(array[random], move, walker)

    validMove(moviment, walker)
  }

  function validMove(nextMoviment, walker) {
    if (!nextMoviment.isValidMoviment.valid) {
      randomMove(walker)
    }
    if (nextMoviment.isValidMoviment.valid) {
      setMove(nextMoviment.nextPosition)
    }
    if (nextMoviment.isValidMoviment.dead) {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert('Morreu Otário')
      })
      window.location.reload()
    }
  }

  useInterval(() => {
    randomMove(EPixels.MD)
  }, 2000)

  return { move }
}

export default useMiniDemonMoviment
