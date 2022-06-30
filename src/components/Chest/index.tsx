/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/constants'

function Chest({ initialPosition }) {
  return (
    <div>
      <div
        className="hero"
        style={{
          position: 'absolute',
          top: TILE_SIZE * initialPosition.y,
          left: TILE_SIZE * initialPosition.x + 2,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundImage: 'url(./assets/images/chest.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Chest
