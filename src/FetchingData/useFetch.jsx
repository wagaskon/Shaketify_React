import {useState, useEffect} from 'react'

// Custom hook created to fetch data from the API
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
      }  
    
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

