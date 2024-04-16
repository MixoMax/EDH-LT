// react + / - counter
import React, { useState , useEffect } from 'react';
import './counter.css';

const random_id = () => {
    let id = Math.random().toString(36).substr(2, 9);
    // prefix with a letter
    id = "counter_container_id_" + id;
    console.log(id);
    return id;
}

function Counter() {
    const [count, setCount] = useState(40);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [id, setId] = useState(random_id());

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
        let buttons = document.querySelectorAll(`#${id} button`);
        let span = document.querySelector(`#${id} span`);
        let color_input = document.querySelector(`#${id} input[type="color"]`);

        buttons.forEach(button => {
            button.style.backgroundColor = color;
            button.style.color = color === 'black' ? 'white' : 'black';
        });

        color_input.style.backgroundColor = color;

        span.style.color = color;


    }, [backgroundColor]);
    
    return (
        <>
            <div className="Counter-container" style={{ backgroundColor }} id={id}>
                <button onClick={() => setCount(40)}>Reset</button>
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