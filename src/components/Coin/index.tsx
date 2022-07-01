/* eslint-disable react/prop-types */
import React from 'react'

import { TILE_SIZE } from '../../config/configs'
import useCoinDeploy from '../../config/useCoinDeploy'

function Coin(initialPosition) {
  const { move } = useCoinDeploy(initialPosition)

  return (
    <div
      className="coin"
      style={{
        position: 'absolute',
        top: TILE_SIZE * move.y,
        left: TILE_SIZE * move.x,
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
