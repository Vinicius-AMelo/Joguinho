import useEventListener from '@use-it/event-listener'
import { useContext, useState } from 'react'

import { CanvasContext } from '../../store/CanvasContext'
import Tile from './Tile/Tile'

function getCanvasMap(canvas) {
  const tilesArray = []
  for (let y = 0; y < canvas.length; y += 1) {
    const canvasY = canvas[y]
    for (let x = 0; x < canvasY.length; x += 1) {
      const position = { x, y }
      const content = canvas[y][x]
      const key = `${x}-${y}`

      tilesArray.push(<Tile key={key} content={content} position={position} />)
    }
  }

  return tilesArray
}

function Debbuger() {
  const [debug, setDebug] = useState(false)

  const { updatedCanvas } = useContext(CanvasContext)
  const tiles = getCanvasMap(updatedCanvas.canvas)

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'F8') {
      setDebug(!debug)
    }
  })

  const display = debug ? 'block' : 'none'

  return (
    <div
      style={{
        display,
      }}
    >
      {tiles}
    </div>
  )
}

export default Debbuger
