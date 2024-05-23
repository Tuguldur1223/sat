import { useEffect, useState } from "react";

export  const useTime = (initialTime:number,callback: () => void, interval = 1000) =>{
    
    const [time, setTima] = useState(initialTime)

    useEffect(()=>{
      const cunInterval = setInterval(()=>{
         if(time > 0) setTima((prev) => prev-1000) 
      }, interval)
      if(time === 0) callback()
      return () => clearInterval(cunInterval) 
    },[time])
    return time
}