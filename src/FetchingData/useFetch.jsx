import {useState, useEffect} from 'react'

// Custom hook created to fetch data from the API
const useFetch = (url,key,host) => {
    const [data, setdata]= useState(null)
    const [isPending, setisPending]= useState(true)
    const [error, seterror]= useState(null)

useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    }  
        fetch(url,options)
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch the data')
            }
            return res.json()
        })
        .then(data=>{
            // const list =data.map(item=>item)
             
            setdata(JSON.stringify(data.data))
            setisPending(false)
            seterror(null)
            // console.log(isPending)
        })
        .catch(err=>{
            setisPending(false)
            seterror(err.message)
        })

    },[url,key,host])
    return {data, isPending, error}   
}
export default useFetch;

