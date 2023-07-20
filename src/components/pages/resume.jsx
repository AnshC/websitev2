import { useEffect, useState } from "react"

export default function Resume() {
    const [pageLaoded, setPageLoaded] = useState(false)
    useEffect(()=>{
      setPageLoaded(true)  
    }, [pageLaoded])
    return (
        <div className={pageLaoded ? "resume visible": "hidden"}>
            
        </div>
    )
}