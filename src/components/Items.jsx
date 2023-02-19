import React from 'react'

const Items = (item) => {
  // console.log(typeof item.prop)
  
  // let data=[]
  console.log(item)
  // for (let i = 0; i < item.prop.length; i++) {
  //   data.push(item.prop[i])
  // }
  // console.log(data[0])
  // const newvalue=JSON.parse(item.prop)
  return (
    <div>{item.prop}</div>
    
    // <div>{data.map(curr=>{
    //   // console.log(curr)
    //   <div>{console.log(curr.id)}</div>
    // })}</div>
    )
}

export default Items