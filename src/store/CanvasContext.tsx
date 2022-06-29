/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react'

import { canvas, changeCanvas } from '../config/canvas'
import { EPixels } from '../config/constants'
import handleMove from '../config/handleMove'

export const CanvasContext = createContext(null)

function ContextCanvas(props) {
  const [updatedCanvas, setCanvas2] = useState({
    canvas,
    setCanvas: (direction, move, walker) => {
      const nextPosition = handleMove(direction, move)
      const isValidMoviment = changeCanvas(nextPosition, walker)
      if (isValidMoviment.valid) {
        setCanvas2((prevState) => {
          const newCanvas = [...prevState.canvas]
          const currentValue = newCanvas[move.y][move.x]

          newCanvas[move.y][move.x] = EPixels.FL

          newCanvas[nextPosition.y][nextPosition.x] = currentValue

          return {
            canvas: newCanvas,
            setCanvas: prevState.setCanvas,
          }
        })
      }
      return {
        nextPosition,
        isValidMoviment,
      }
    },
  })

  return (
    <CanvasContext.Provider value={updatedCanvas}>
      {props.children}
    </CanvasContext.Provider>
  )
}

export default ContextCanvas
