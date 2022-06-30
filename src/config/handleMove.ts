import { EWalker } from './configs'

function handleMove(direction, move) {
  if (direction === EWalker.LEFT) {
    return { x: move.x - 1, y: move.y }
  }
  if (direction === EWalker.RIGHT) {
    return { x: move.x + 1, y: move.y }
  }
  if (direction === EWalker.UP) {
    return { x: move.x, y: move.y - 1 }
  }
  if (direction === EWalker.DOWN) {
    return { x: move.x, y: move.y + 1 }
  }

  return null
}

export default handleMove
