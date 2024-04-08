import React, { useState, useRef, useEffect } from "react"

export default function MutableRef() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    function stopTimer() {
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])


    return <div>
        <h4>Hook Timer: {timer}</h4>
        <button onClick={stopTimer}>On Click</button>
    </div>

}