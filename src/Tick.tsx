import React, { useState, useEffect } from "react";


function Clock (){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
      
    return <div> {new Date().toLocaleTimeString()}</div> 
}  


export default Clock;