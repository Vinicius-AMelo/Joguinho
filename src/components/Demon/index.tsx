import React from 'react'

import { TILE_SIZE } from '../../config/constants'
import useEnemyMoviment from '../../config/useEnemyMoviment'

function Demon(initialPosition) {
  const { move } = useEnemyMoviment(initialPosition)

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
          backgroundImage: 'url(./assets/images/demon.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Demon
