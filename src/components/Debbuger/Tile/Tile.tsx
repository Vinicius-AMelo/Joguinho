/* eslint-disable react/prop-types */
/* eslint-disable default-case */
import React from 'react'

import { TILE_SIZE } from '../../../config/constants'

function Tile({ content, position }) {
  function getTileColor() {
    switch (content) {
      case 0:
        return 'blue'
      case 1:
        return 'yellow'
      case 2:
        return 'greenyellow'
      case 3:
        return 'red'
      case 4:
        return 'red'
      case 5:
        return 'cyan'
      case 6:
        return 'magenta'
      case 7:
        return 'orangered'
    }
    return null
  }
  const color = getTileColor()
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        color,
        width: TILE_SIZE,
        height: TILE_SIZE,
        textAlign: 'center',
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
      }}
    >
      {content}
    </div>
  )
}

export default Tile