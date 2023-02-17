import React from 'react'
// import { useState } from 'react'
import Titles from './components/Titles'
import MostRecentEQ from './FetchingData/MostRecentEQ'

function App() {

  
  return (
    <div className="App">
      <h1>Get the 20 most recent earthquakes from all over in the world</h1>
      <Titles />
      <MostRecentEQ />
    </div>
  )
}

export default App
