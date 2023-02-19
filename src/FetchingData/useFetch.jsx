import {useState, useEffect} from 'react'
// import asign from "/functions/assigning.js"
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
        .then(res=>{
            // setdata(JSON.stringify(res.data.map(item=>([item.magnitude,item.location,item.continent,item.country,item.data,item.alert,item.cdi,item.city,item.code,item.depth,item.distanceKM,item.dmin,item.felt,item.gap,item.geometryType,item.id,item.ids,item.latitude,item.locationDetails,item.longitude,item.magType,,item.mmi,item.net,item.nst,item.place,item.placeOnly,item.postcode,item.rms,item.sig,item.sources,item.status,item.subnational,item.time,item.timezone,item.title,item.tsunami,item.type,item.types,item.updated,item.url,item.detailsUrl]))))
            
            // )
            // setdata(JSON.stringify(res.data))
          // I was at the following code:
          setdata(JSON.stringify(res.data.map(item=>(item))))
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

