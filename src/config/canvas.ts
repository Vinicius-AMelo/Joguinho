/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import { EPixels } from './constants'

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
  [WL, FL, FL, WL, FL, FL, FL, WL, FL, FL, FL, HR, FL, FL, WL, FL, FL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL],
  [WL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, HL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, DM, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, DM, DM, FL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, WL],
  [WL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, FL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
]

export function changeCanvas(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x]

  let canvasValueDemon

  if ((nextPosition.y < 19 && nextPosition.y > 0) && (nextPosition.x < 19 && nextPosition.y > 0)) {

    canvasValueDemon = canvas[nextPosition.y + 1][nextPosition.x + 1]
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
      valid: (canvasValue === EPixels.FL && canvasValueDemon === EPixels.FL) || (canvasValue === EPixels.HR && canvasValueDemon === EPixels.HR) || (canvasValue === EPixels.DM && canvasValueDemon === EPixels.FL) || (canvasValue === EPixels.FL && canvasValueDemon === EPixels.DM),
      dead: canvasValue === EPixels.HR,
      chest: false,
    }
  }
  const result =
    walker === EPixels.HR
      ? getHeroValidMoves(canvasValue)
      : walker === EPixels.MD
        ? getMiniDemonValidMoves(canvasValue)
        : getDemonValidMoves(canvasValue)
  return result
}
