import React from 'react';
import { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [value, setValue] = useState(0) 
  const [valueColor, setValueColor] = useState("neutral")
  const increament = () => {
      const newValue = value + 1;

      if (newValue >= 1 ) {
          setValueColor('positive')
      } else if (newValue < 0) {
          setValueColor('negative')
      } else {
          setValueColor('neutral')
      }
      
      setValue(newValue)
      
  };  
  const reset = () => {
     setValue(0)
     setValueColor('neutral')
  };
  const decreament = () => {
      const newValue = value - 1;

    if (newValue < 0 ) {
        setValueColor('negative')
    } else if (newValue >= 1) {
        setValueColor('positive')
    } else {
        setValueColor('neutral')
    }
    
     setValue(newValue)
  };
    return ( 
        <>
      <div className={`counter-container ${valueColor}`}> 
    <h2>Simple React App</h2>
    <h1>{value}</h1>
    <button className='btn btn2' onClick={increament}>Increase</button>
    <button className='btn' onClick={reset}>Reset</button>
    <button className='btn btn3' onClick={decreament}>Decrease</button>
    <p className='para'>Designed by Justice</p>
    </div>
    </>
    )
}

export default Counter;