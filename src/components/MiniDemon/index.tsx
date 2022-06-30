import React from 'react'

import { TILE_SIZE } from '../../config/configs'
import useMiniDemonMoviment from '../../config/useMiniDemonMoviment'

function MiniDemon(initialPosition) {
  const { move } = useMiniDemonMoviment(initialPosition)

  return (
    <div>
      <div
        className="hero"
        style={{
          position: 'absolute',
          top: TILE_SIZE * move.y,
          left: TILE_SIZE * move.x,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundImage: 'url(./assets/images/mini-demon.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 -15px',
          animation: 'diabo 1s steps(4) infinite',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default MiniDemon
