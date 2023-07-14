import React from 'react';
import './CalculatorSlider.css';

export default function () {
    
    const [isOn, setIsOn] = React.useState([true, false]);

    return (
        <>
            <button 
                onClick={() => setIsOn([!isOn[0], !isOn[1]])}
            >Budget</button>
            <button 
                onClick={() => setIsOn([!isOn[0], !isOn[1]])}
            >Compound</button>
        </>
    )
}