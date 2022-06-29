import { canvas } from '../../config/canvas'
import { EPixels } from '../../config/constants'
import Chest from '../Chest'
import Debbuger from '../Debbuger/Debbuger'
import Demon from '../Demon'
import Hero from '../Hero'
import MiniDemon from '../MiniDemon'
import Trap from '../Trap'

function getCanvasMap() {
  const tilesArray = []
  for (let y = 0; y < canvas.length; y += 1) {
    const canvasY = canvas[y]
    for (let x = 0; x < canvasY.length; x += 1) {
      const position = { x, y }
      const content = canvas[y][x]
      const key = `${x}-${y}`

      if (content === EPixels.HR) {
        tilesArray.push(<Hero key={key} initialPosition={position} />)
      }
      if (content === EPixels.DM) {
        tilesArray.push(<Demon key={key} initialPosition={position} />)
      }
      if (content === EPixels.TR) {
        tilesArray.push(<Trap key={key} initialPosition={position} />)
      }
      if (content === EPixels.MD) {
        tilesArray.push(<MiniDemon key={key} initialPosition={position} />)
      }
      if (content === EPixels.CH) {
        tilesArray.push(<Chest key={key} initialPosition={position} />)
      }
    }
  }

  return tilesArray
}

const tiles = getCanvasMap()
function Level() {
  return (
    <div className="mapa">
      {tiles}
      <Debbuger />
    </div>
  )
}

export default Level
