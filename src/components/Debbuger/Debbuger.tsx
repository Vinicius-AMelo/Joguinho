import { canvas } from '../../config/canvas'
import Tile from './Tile/Tile'

function getCanvasMap() {
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
  const tiles = getCanvasMap()

  return <div>{tiles}</div>
}

export default Debbuger
