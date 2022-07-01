import React from 'react'

import { TILE_SIZE } from '../../config/configs'
import useMiniDemonMoviment from '../../config/useMiniDemonMoviment'

function MiniDemon(initialPosition) {
  const { move } = useMiniDemonMoviment(initialPosition)

  return (
    <div
      className="hero md"
      style={{
        position: 'absolute',
        top: TILE_SIZE * move.y,
        left: TILE_SIZE * move.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        // backgroundImage: 'url(./assets/images/mini-orc.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -50px',
        animation: 'diabo 1s steps(4) infinite',
      }}
    />
  )
}

export default MiniDemon
