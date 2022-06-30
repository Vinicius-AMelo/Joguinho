import React from 'react'

import { CAP_OFFSET, TILE_SIZE } from '../../config/configs'
import useHeroMoviment from '../../config/useHeroMoviment'

function Hero(initialPosition) {
  const { move } = useHeroMoviment(initialPosition)

  return (
    <div>
      <div
        className="hero"
        style={{
          position: 'absolute',
          top: TILE_SIZE * move.y - CAP_OFFSET,
          left: TILE_SIZE * move.x,
          width: TILE_SIZE,
          height: TILE_SIZE + CAP_OFFSET,
          // backgroundImage: 'url(./assets/images/wizzard2.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 -36px',
          animation: 'diabo 1s steps(4) infinite',
        }}
      />
      <img src="../../" alt="" />
    </div>
  )
}

export default Hero
