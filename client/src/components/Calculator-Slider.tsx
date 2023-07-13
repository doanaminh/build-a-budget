import React from 'react';

export default function () {
    
    const [isOn, setIsOn] = React.useState(false);

    return (
        <>
            <input
                type='checkbox'
                checked={isOn}
                onClick={(e) => setIsOn(e.target.val)}
            />
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </>
    )
}