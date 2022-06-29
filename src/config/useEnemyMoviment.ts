import { useState } from 'react'

import { changeCanvas } from './canvas'
import { EWalker } from './constants'
import handleMove from './handleMove'

function useEnemyMoviment({ initialPosition }) {
  const [move, setMove] = useState(initialPosition)

  setTimeout(() => {
    const random = Math.floor(Math.random() * 3.99)
    const array = Object.values(EWalker)
    const nextMoviment = handleMove(array[random], move)
    const isValidMoviment = changeCanvas(nextMoviment)
    if (isValidMoviment) {
      setMove(nextMoviment)
    }
  }, 2000)

  return { move }
}

export default useEnemyMoviment
