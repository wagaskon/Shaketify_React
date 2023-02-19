import React from 'react'
import { useState, useEffect } from 'react'
// import useFetch from './FetchingData/useFetch'
import Items from './components/Items'
function App() {
    // const {data,isPending,error}=useFetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=3&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1','ba52ca9a33mshb6074c5c1972ea6p1030f2jsna50d567c10f4','everyearthquake.p.rapidapi.com' )
  // function Earthquake(item){
  //   return(
  //     <div>
  //       <h1>Magnitude: {item.}</h1>
  //     </div>>
  //   )
  const [title,setTitle]=useState(null)
  const [date, setDate]= useState(null)
  const [link, setLink]= useState(null)
  const [latitude, setLatitude]= useState('')
  const [longitude, setLongitude]= useState('')

const url=`https://everyearthquake.p.rapidapi.com/latestEarthquakeNearMe?latitude=${latitude}&longitude=${longitude}`
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '26817802b9msh3b85000919b2cc8p11516ajsn916953542d0e',
        'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(response =>{
        setTitle(JSON.stringify(response.data[0].title))
        setDate(JSON.stringify(response.data[0].date))
        setLink(JSON.stringify(response.data[0].url))})
      .catch(err => console.error(err));

  },[url])
  function handleSubmit(e){
    e.preventDefault()

  }
  console.log(date)
    return (
      <div>
       <form onSubmit={handleSubmit} >
      <label>Latitude
        <input 
          type="text" 
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
        />
      </label>
      <label>Longitude
        <input 
          type="text" 
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
        />
      </label>
      <button type="submit">Submit</button>
    </form>

        <h1>Title: {title}</h1>
        <h1>Date: {date}</h1>
        <h1>Details Link: <a href={JSON.parse(link)}  target="_blank">Click here</a></h1>
      </div>
    // <div className="App"> 
    //  { error && <div>{error}</div>}
    //   {isPending && <div>Loading...</div>}
    //   {data && <div>{data}</div>}
    //   {/* {data && <div>{<Items prop={data.map(item=>(item))}/>}</div>} */}
    //  {/* {data.map(item=>{return <div>{item.magnitude}</div>})} */}
    // </div>
  )
}

export default App
