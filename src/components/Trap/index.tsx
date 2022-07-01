/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/configs'

function Trap({ initialPosition }) {
  return (
    <div
      className="trap"
      style={{
        position: 'absolute',
        top: TILE_SIZE * initialPosition.y,
        left: TILE_SIZE * initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        // backgroundImage: 'url(./assets/images/trap.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        animation: 'oneSquare 1s steps(4) infinite',
      }}
    />
  )
}

export default Trap
