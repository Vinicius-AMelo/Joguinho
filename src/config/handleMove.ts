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
  if (direction === null) {
    const random = Math.floor(Math.random() * 19)
    const random2 = Math.floor(Math.random() * 19)
    console.log(2)
    return { x: random, y: random2 }
  }
  if (direction === 'coin') {
    return { count: 0 }
  }

  return null
}

export default handleMove
