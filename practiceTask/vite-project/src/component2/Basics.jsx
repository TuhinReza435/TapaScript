import React, { useEffect, useState } from 'react';

const Basics = () => {
    const[date,setDate]=useState(null);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then((response)=>response.json())
         .then((json)=>setDate(json))
    },[])
    return (
        <div>
              <h2>Fetch Date</h2>
              {date?<p>{date.title}</p>: <p>Loading...</p> }
        </div>
    );
};

export default Basics;