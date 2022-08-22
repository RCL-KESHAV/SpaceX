import React, { useState, useEffect } from 'react'
import "../../Style/App.css"
export default function Resize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <div className='Resize' >
                <h4>Widht of Windows: {windowWidth}</h4>
            </div>
        </>
    )
}