// react + / - counter
import React, { useState , useEffect } from 'react';
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        // update the color for the UI elements to be the opposite of the background color
        
        // backgroundColor is a hex color
        // convert it to 3 integers

        // 1. remove the # from the beginning of the string
        let hex = backgroundColor.slice(1);

        let r = parseInt(hex.slice(0, 2), 16);
        let g = parseInt(hex.slice(2, 4), 16);
        let b = parseInt(hex.slice(4, 6), 16);

        let gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        let color = gray > 128 ? 'black' : 'white';

        // change color of the button text and the span text
        document.querySelectorAll('.Counter-container button').forEach((button) => {
            button.style.color = color;
        });
        document.querySelector('.Counter-container span').style.color = color;


    }, [backgroundColor]);
    
    return (
        <>
            <div className="Counter-container" style={{ backgroundColor }}>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>

                <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
            </div>
        </>
    );
}

export default Counter;