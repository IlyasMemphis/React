import React, { useState, useRef, useEffect } from "react";

function ValueDisplay({ value }) {
    const prevValueRef = useRef("")

    useEffect(() => {
        prevValueRef.current = value;
    
    }, [value])

    return ( 
        <div className="value-display">
            <p>Текущее значение: <strong>{value}</strong></p>
            <p>Предыдущее значение: <strong>{prevValueRef.current}</strong></p>
        </div>
    )
}

export default ValueDisplay;