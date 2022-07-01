import { EPixels } from './configs'

const { WL } = EPixels
const { FL } = EPixels
const { TR } = EPixels
const { MD } = EPixels
const { DM } = EPixels
const { CH } = EPixels
const { HR } = EPixels
const { HL } = EPixels

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, TR, FL, WL, WL, FL, FL, FL, FL, MD, FL, FL, FL, HL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, MD, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, DM, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, TR, FL, FL, FL, FL, FL, TR, FL, FL, DM, DM, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, WL, FL, FL, FL, FL, FL, WL],
  [WL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, HR, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
]

export function changeCanvas(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x]

  let canvasValueDemon1
  let canvasValueDemon2
  let canvasValueDemon3

  if (
    nextPosition.y < 19 &&
    nextPosition.y > 0 &&
    nextPosition.x < 19 &&
    nextPosition.y > 0
  ) {
    canvasValueDemon1 = canvas[nextPosition.y + 1][nextPosition.x]
    canvasValueDemon2 = canvas[nextPosition.y][nextPosition.x + 1]
    canvasValueDemon3 = canvas[nextPosition.y + 1][nextPosition.x + 1]
  }

  function getHeroValidMoves(canvasValue) {
    return {
      valid:
        canvasValue === EPixels.FL ||
        canvasValue === EPixels.DM ||
        canvasValue === EPixels.MD ||
        canvasValue === EPixels.CH ||
        canvasValue === EPixels.TR,
      dead:
        canvasValue === EPixels.DM ||
        canvasValue === EPixels.MD ||
        canvasValue === EPixels.HL ||
        canvasValue === EPixels.TR,
      chest: canvasValue === EPixels.CH,
    }
  }

  function getMiniDemonValidMoves(canvasValue) {
    return {
      valid: canvasValue === EPixels.FL || canvasValue === EPixels.HR,
      dead: canvasValue === EPixels.HR,
      chest: false,
    }
  }
  function getDemonValidMoves(canvasValue) {
    return {
      valid:
        (canvasValue === EPixels.HR &&
          canvasValueDemon1 === EPixels.FL && // LEFT HERO
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.DM) || // LEFT HERO
        (canvasValue === EPixels.FL &&
          canvasValueDemon1 === EPixels.HR && // LEFT HERO
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.DM) || // LEFT HERO
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.DM && // RIGHT HERO
          canvasValueDemon2 === EPixels.HR &&
          canvasValueDemon3 === EPixels.FL) || // RIGHT HERO
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.DM && // RIGHT HERO
          canvasValueDemon2 === EPixels.FL &&
          canvasValueDemon3 === EPixels.HR) || // RIGHT HERO
        (canvasValue === EPixels.HR &&
          canvasValueDemon1 === EPixels.DM && // UP HERO
          canvasValueDemon2 === EPixels.FL &&
          canvasValueDemon3 === EPixels.DM) || // UP HERO
        (canvasValue === EPixels.FL &&
          canvasValueDemon1 === EPixels.DM && // UP HERO
          canvasValueDemon2 === EPixels.HR &&
          canvasValueDemon3 === EPixels.DM) || // UP HERO
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.HR && // DOWN HERO
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.FL) || // DOWN HERO
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.FL && // DOWN HERO
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.HR) || // DOWN HERO
        (canvasValue === EPixels.FL &&
          canvasValueDemon1 === EPixels.FL && // LEFT
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.DM) || // LEFT
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.DM && // RIGHT
          canvasValueDemon2 === EPixels.FL &&
          canvasValueDemon3 === EPixels.FL) || // RIGHT
        (canvasValue === EPixels.FL &&
          canvasValueDemon1 === EPixels.DM && // UP
          canvasValueDemon2 === EPixels.FL &&
          canvasValueDemon3 === EPixels.DM) || // UP
        (canvasValue === EPixels.DM &&
          canvasValueDemon1 === EPixels.FL && // DOWN
          canvasValueDemon2 === EPixels.DM &&
          canvasValueDemon3 === EPixels.FL), // DOWN

      dead:
        canvasValue === EPixels.HR ||
        canvasValueDemon1 === EPixels.HR ||
        canvasValueDemon2 === EPixels.HR ||
        canvasValueDemon3 === EPixels.HR,
      chest: false,
    }
  }

  let result
  if (walker === EPixels.HR) {
    result = getHeroValidMoves(canvasValue)
  }
  if (walker === EPixels.MD) {
    result = getMiniDemonValidMoves(canvasValue)
    return result
  }
  if (walker === EPixels.DM) {
    result = getDemonValidMoves(canvasValue)
    return result
  }
  return result
}
