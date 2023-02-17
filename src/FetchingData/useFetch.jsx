import {useState, useEffect} from 'react'


const useFetch = (url) => {
    const [data, setdata]= useState(null)
    const [isPending, setisPending]= useState(true)
    const [error, seterror]= useState(null)

    useEffect(()=>{

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