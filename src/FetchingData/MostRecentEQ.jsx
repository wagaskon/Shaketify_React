// import React from 'react'
// import { useState } from 'react'
// import Items from '../components/Items'

// const MostRecentEQ = () => {
//     const [items, setItems] = useState('')
//     const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '26817802b9msh3b85000919b2cc8p11516ajsn916953542d0e',
//           'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
//         }
//       };
      
//       fetch('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=2&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1', options)
//         .then(response => response.json())
//         .then(res => {
//           const list = res.data   //array of objects
//           setItems(list)
//           console.log(list)
//          })
//         .catch(err => console.error(err));
//   return (
//     <div>
//         {items.map(item=> <Items item={item} />)}
//     </div>
//   )
// }

// export default MostRecentEQ


