import React, { useEffect, useState } from "react";
import "./progressBar.scss"

const ProgressBar = (props) => {

    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = props.windowHeight - window.innerHeight;
            const scrollAmount = window.scrollY;
            const newScrollPercent = (scrollAmount / totalHeight) * 100;
            setScrollPercent(Math.round(newScrollPercent));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [props.windowHeight])

    const cssVarsProgressBar = {
        '--width': `${scrollPercent}%`,
        '--colors': `rgb(${props.color.red},${props.color.green},${props.color.blue})`,
    }

    return (
        <div className="progressBar" onClick={() => props.handleClick()} style={{ ...cssVarsProgressBar }} />
    )
}

export default ProgressBar