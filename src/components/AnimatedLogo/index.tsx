'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
const AnimatedLogo = ()=> {
    const [rotation, setRotation] = useState<number>(0)
    
    useEffect(() =>{
        const interval = setInterval (() => {
            setRotation(prev=>(prev + 1 ) % 360)
        }, 10)
        return () => clearInterval (interval)
    }, [])
    return(
        <>
       <div
       style= {{ transform: `rotate(${rotation}deg)`}}
       className="w-16 h-16"
       >
       <Image src="/images/logo.png" alt='Animated Logo' width={64} height={64}/>
       </div>
        <div className="mt-2 text-violet-600 font-bold text-sm tracking-wide">
        FULL-STACK DEVELOPER
      </div>

       </>
    )
}

export default AnimatedLogo