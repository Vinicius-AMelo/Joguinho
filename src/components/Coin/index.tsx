/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/configs'

function Coin({ initialPosition }) {
  return (
    <div
      className="coin"
      style={{
        position: 'absolute',
        top: TILE_SIZE * initialPosition.y,
        left: TILE_SIZE * initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        // backgroundImage: 'url(./assets/images/coin.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        animation: 'fourSquare .7s steps(8) infinite',
      }}
    />
  )
}

export default Coin
