import React, { createContext, useState } from 'react'

import { canvas, changeCanvas } from '../config/canvas'
import { EPixels } from '../config/configs'
import handleMove from '../config/handleMove'

export const CanvasContext = createContext(null)

interface IProps {
  children: React.ReactNode
}

function ContextCanvas(props: IProps) {
  const [updatedCanvas, setCanvas2] = useState({
    canvas,
    setCanvas: (direction, move, walker) => {
      const nextPosition = handleMove(direction, move)
      const isValidMoviment = changeCanvas(nextPosition, walker)
      if (isValidMoviment.valid && (walker === EPixels.MD || walker === EPixels.HR)) {
        setCanvas2((prevState) => {
          const newCanvas = [...prevState.canvas]

          newCanvas[move.y][move.x] = EPixels.FL

          newCanvas[nextPosition.y][nextPosition.x] = walker

          return {
            canvas: newCanvas,
            setCanvas: prevState.setCanvas,
          }
        })
      }
      if (isValidMoviment.valid && walker === EPixels.DM) {
        setCanvas2((prevState) => {
          const newCanvas = [...prevState.canvas]

          newCanvas[move.y][move.x] = EPixels.FL
          newCanvas[move.y + 1][move.x] = EPixels.FL
          newCanvas[move.y][move.x + 1] = EPixels.FL
          newCanvas[move.y + 1][move.x + 1] = EPixels.FL

          newCanvas[nextPosition.y][nextPosition.x] = walker
          newCanvas[nextPosition.y + 1][nextPosition.x] = walker
          newCanvas[nextPosition.y][nextPosition.x + 1] = walker
          newCanvas[nextPosition.y + 1][nextPosition.x + 1] = walker

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
