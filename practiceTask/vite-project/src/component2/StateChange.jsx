import React, { useEffect, useState } from 'react';

const StateChange = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>
    {
        document.title=`count : ${count}`
    },[count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Incriment++ </button>
        </div>
    );
};

export default StateChange;