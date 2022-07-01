import React from 'react'

import { CAP_OFFSET, GAME_SIZE, TILE_SIZE } from '../../config/configs'
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
          animation: 'oneSquare 1s steps(4) infinite',
        }}
      />
      <div
        className="corner-wall-bottom"
        style={{
          position: 'absolute',
          width: GAME_SIZE,
          height: GAME_SIZE / 48,
          backgroundRepeat: 'no-repeat',
          bottom: 40,
          zIndex: 1,
        }}
      />
    </div>
  )
}

export default Hero
