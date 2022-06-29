import React from 'react'

import { TILE_SIZE } from '../../config/constants'
import useHeroMoviment from '../../config/useHeroMoviment'

function Demon(initialPosition) {
  const { move } = useHeroMoviment(initialPosition)
  console.log(move)

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
