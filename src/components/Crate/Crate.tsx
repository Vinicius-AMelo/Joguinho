/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/configs'

function Crate({ initialPosition }) {
  return (
    <div
      className="crate"
      style={{
        position: 'absolute',
        top: TILE_SIZE * initialPosition.y - 18,
        left: TILE_SIZE * initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE + 18,
        // backgroundImage: 'url(./assets/images/trap.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        zIndex: 1,
      }}
    />
  )
}

export default Crate
