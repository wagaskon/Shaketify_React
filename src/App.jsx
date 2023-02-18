import React from 'react'
import useFetch from './FetchingData/useFetch'
import Items from './components/Items'


function App() {
    const {data,isPending,error}=useFetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=2&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1','ba52ca9a33mshb6074c5c1972ea6p1030f2jsna50d567c10f4','everyearthquake.p.rapidapi.com' )

    // console.log(data)
    const ITEMS = JSON.parse(data)
    return (
    <div className="App"> 
     { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {data && <div>{JSON.parse(data)}</div>} */}
      {data && <div>{ITEMS.map((item)=>{<Items itemv={item}/>})}</div>}
    </div>
  )
}

export default App
