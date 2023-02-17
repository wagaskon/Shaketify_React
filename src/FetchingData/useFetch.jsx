import {useState, useEffect} from 'react'


const useFetch = (url,key, host) => {
    const [data, setdata]= useState(null)
    const [isPending, setisPending]= useState(true)
    const [error, seterror]= useState(null)
    // const [apikey, setapikey]=useState(key)
    // const [host, sethost]=useState(host)

    useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': host
        }
      };
      
//       fetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=2&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1', options)
//         

        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch the data')
            }
            return res.json()
        })
        .then(data=>{
            setdata(data)
            setisPending(false)
            seterror(null)
        })
        .catch(err=>{
            setisPending(false)
            seterror(err.message)
        })

    },[url])
    return {data, isPending, error}


    
    
}
export default useFetch;

// function useFetch(url){
//     const [data,setdata]= useState(null)
//     const [isPending,setisPending]=useState(true)
//     const [error, seterror]=useState(null)

//     useEffect(()=>{
//         fetch(url)
//         .then(res=>{
//             if(!res.ok){
//                 throw Error ('Could not fetch the data')
//             }
//             return res.json
//         })
//         .then(data=>{
//             setdata(data)
//             setisPending(false)
//             seterror(null)
//         })
//         .catch(err=>{
//             isPending(false)
//             seterror(err.message)
//         })
//     },[url])
//     return {data, isPending, error}

// }