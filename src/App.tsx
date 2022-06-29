import React from 'react'

import './App.css'
import Level from './components/Level'
import ContextCanvas from './store/CanvasContext'

function App() {
  return (
    <div className="App">
      <ContextCanvas>
        <Level />
      </ContextCanvas>
    </div>
  )
}

export default App
