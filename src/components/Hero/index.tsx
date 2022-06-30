import React from 'react'

import { TILE_SIZE } from '../../config/configs'
import useHeroMoviment from '../../config/useHeroMoviment'

function Hero(initialPosition) {
  const { move } = useHeroMoviment(initialPosition)

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
          backgroundImage: 'url(./assets/images/player.png)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Hero
