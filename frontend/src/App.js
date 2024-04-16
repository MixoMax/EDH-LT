import React, { useState , useEffect } from 'react';
import Counter from "./components/counter.jsx";

import './App.css';



function App() {

  const [num_counter, setNumCounter] = useState(4);

  useEffect(() => {
    let counters = document.querySelectorAll('.Counter-container');

    // set .Counter-container to fit all the counters
    // if 2 , set vh to 50%
    // if 3, set vh to 50%, vw to 50% for 2, vw to 100% for 1
    // if 4, set vh to 50%, vw to 50% (2x2)
    // if 5, (2x2) + 1
    // if 6, (2x3)
    // if 7, (2x3) + 1
    // if 8, (2x4)
    // if 9, (3x3)
    // if 10, (3x3) + 1
    // if 11, (3x3) + 2
    // if 12, (3x4) == (3x3) + 3
    // if 13, (3x3) + 4

    let square = Math.floor(Math.sqrt(num_counter));
    let remainder = num_counter - square * square;

    let square_widht = 100 / square;
    let square_height = 100 / (square + (remainder > 0 ? 1 : 0));

    let remainder_width = 100 / remainder;
    let remainder_height = square_height;

    counters.forEach((counter, index) => {
        if (index < num_counter - remainder) {
            counter.style.width = `${square_widht}vw`;
            counter.style.height = `${square_height}vh`;
        }
        else {
            counter.style.width = `${remainder_width}vw`;
            counter.style.height = `${remainder_height}vh`;
        }
        });

    console.log('num_counter', num_counter);
    console.log('square', square);
    console.log('remainder', remainder);
    console.log('square_widht', square_widht);
    console.log('square_height', square_height);
    console.log('remainder_width', remainder_width);
    console.log('remainder_height', remainder_height);


    




  }, [num_counter]);


  useEffect(() => {
    if (num_counter < 1) {
      setNumCounter(1);
    }
  }, [num_counter]);
  
  return (
    <div className="App">
      <button
        onClick={() => setNumCounter(num_counter + 1)}
        className="UI"
        id = "add-counter"
        >
        Add Counter
        </button>

      <button
        onClick={() => setNumCounter(num_counter - 1)}
        className="UI"
        id = "remove-counter"
        >
        Remove Counter
        </button>


      <div className="App-container">
        {[...Array(num_counter)].map((e, i) => <Counter key={i} />)}
      </div>
    </div>
  );
}

export default App;
