import React from 'react'

import { TILE_SIZE } from '../../config/constants'
import useDemonMoviment from '../../config/useDemonMoviment'

function Demon(initialPosition) {
  const { move } = useDemonMoviment(initialPosition)

  return (
    <div>
      <div
        className="hero"
        style={{
          position: 'absolute',
          top: TILE_SIZE * move.y,
          left: TILE_SIZE * move.x,
          width: TILE_SIZE * 2,
          height: TILE_SIZE * 2,
          backgroundImage: 'url(./assets/images/demon.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 -30px',
          animation: 'diaboG 1s steps(4) infinite',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Demon
