import Demon from '../Demon'
import Hero from '../Hero'

function Level() {
  return (
    <div className="mapa">
      <Hero initialPosition={{ x: 0, y: 0 }} />
      <Demon initialPosition={{ x: 8, y: 9 }} />
    </div>
  )
}

export default Level
