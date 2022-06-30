import React from 'react'

import { TILE_SIZE } from '../../config/configs'
import useDemonMoviment from '../../config/useDemonMoviment'

function Demon(initialPosition) {
  const { move } = useDemonMoviment(initialPosition)

  return (
    <div>
      <div
        className="hero dm"
        style={{
          position: 'absolute',
          top: TILE_SIZE * move.y,
          left: TILE_SIZE * move.x,
          width: TILE_SIZE * 2,
          height: TILE_SIZE * 2,
          backgroundImage: 'url(./assets/images/orc.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 -100px',
          animation: 'diaboG 1s steps(4) infinite',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Demon
