/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { TILE_SIZE } from '../../config/configs'

function Trap({ initialPosition }) {
  const [state, setState] = useState(true)

  setTimeout(() => {
    setState(!state)
  }, 499)

  const play = state ? 'running' : 'paused'
  return (
    <div
      className="trap"
      style={{
        position: 'absolute',
        top: TILE_SIZE * initialPosition.y,
        left: TILE_SIZE * initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE,
        // backgroundImage: 'url(./assets/images/trap.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        animation: 'trap 1s steps(4) infinite',
        animationPlayState: play,
      }}
    />
  )
}

export default Trap
