/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/constants'

function Trap({ initialPosition }) {
  return (
    <div>
      <div
        className="hero"
        style={{
          position: 'absolute',
          top: TILE_SIZE * initialPosition.y,
          left: TILE_SIZE * initialPosition.x,
          width: TILE_SIZE,
          height: TILE_SIZE * 2,
          backgroundImage: 'url(./assets/images/trap.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 0',
          animation: 'trap 2s steps(4) infinite easy-in',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Trap
