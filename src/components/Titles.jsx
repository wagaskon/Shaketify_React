import React from 'react'

const Titles = () => {
    const title=["Location","Continent","Country",
    "data","Alert","cdi","city","code","Depth",
    "Distance KM","dmin","felt","gap","geometry Type",
    "id","ids","Latitude","Location Details","Longitude",
    "magType","magnitude","mmi","net","nst","place","placeOnly",
    "Postcode","rms","sig","sources","status","subnational",
    "time","timezone","title","tsunami",
    "type","types","updated","url","DetailsUrl"

]
  return (
   <div>{title.map((item) =><p>{item}</p>)}</div>
      )
    }
    
export default Titles