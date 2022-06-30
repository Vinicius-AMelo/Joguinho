import { canvas } from '../../config/canvas'
import { EPixels, GAME_SIZE } from '../../config/configs'
import Chest from '../Chest'
import Debbuger from '../Debbuger/Debbuger'
import Demon from '../Demon'
import Hero from '../Hero'
import MiniDemon from '../MiniDemon'
import Trap from '../Trap'
import '../../App.css'

function getCanvasMap() {
  const tilesArray = []
  for (let y = 0; y < canvas.length; y += 1) {
    const canvasY = canvas[y]
    for (let x = 0; x < canvasY.length; x += 1) {
      const position = { x, y }
      const content = canvas[y][x]

      if (y > 0 && y < 19) {
        const demon1 = canvas[y][x]
        const demon2 = canvas[y + 1][x]
        const demon3 = canvas[y][x + 1]
        const demon4 = canvas[y + 1][x + 1]

        const valid = {
          valido:
            demon1 === EPixels.DM &&
            demon2 === EPixels.DM &&
            demon3 === EPixels.DM &&
            demon4 === EPixels.DM,
        }

        const key = `${x}-${y}`

        if (content === EPixels.HR) {
          tilesArray.push(<Hero key={key} initialPosition={position} />)
        }
        if (valid.valido) {
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
  }

  return tilesArray
}

const tiles = getCanvasMap()
function Level() {
  return (
    <div
      className="mapa"
      style={{
        // backgroundImage: 'url(./assets/images/level4.gif)',
        width: GAME_SIZE,
        height: GAME_SIZE,
        position: 'relative',
      }}
    >
      {tiles}
      <Debbuger />
    </div>
  )
}

export default Level
