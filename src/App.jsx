import React from 'react'
// import { useState } from 'react'
// import Titles from './components/Titles'
import MostRecentEQ from './FetchingData/MostRecentEQ'

function App() {

  function fetchMostRecentEQ(){
    return <MostRecentEQ />
  }

  
  return (
    <div className="App">
      {

      }
      {/* <Titles /> */}
      <button onClick={fetchMostRecentEQ}>Fetch</button>
    </div>
  )
}

export default App
