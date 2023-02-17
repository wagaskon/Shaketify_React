import React from 'react'
// import { useState } from 'react'
// import Titles from './components/Titles'
// import MostRecentEQ from './FetchingData/MostRecentEQ'
import useFetch from './FetchingData/useFetch'


function App() {

  const [data, isPending, error] = useFetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=2&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1', '26817802b9msh3b85000919b2cc8p11516ajsn916953542d0e', 'everyearthquake.p.rapidapi.com')


  // function fetchMostRecentEQ(){
  //   return <MostRecentEQ />
  // }


  
  return (
    <div className="App">
      {      
        error && <div>{error}</div>
      }
      {
        isPending && <div>Loading...</div>
      }
      {
        data && <div>{data}</div>
      }
      {/* <Titles /> */}
      <button onClick={fetchMostRecentEQ}>Fetch</button>
    </div>
  )
}

export default App
