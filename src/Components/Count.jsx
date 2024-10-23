import React from 'react'
import { useState } from 'react'
import CustomButton from "./CustomButton.jsx"
const Count = () => {
    const [count,setCountValue] = useState(0);
    
    function incrementCounter(){
        if(count > 1999){
            alert("Count cannot exceed 2000");
        }
        else{
            setCountValue(count+1);
        }
    }
    function decrementCounter(){
        if(count < 1){
            alert("Count cannot be negative");
        }
        else{
            setCountValue(count-1);
        }
    }
    function multiplyCounter(){
        if(count > 1999){
            alert("Count cannot exceed 2000");
        }
        else if(count < 0){
            alert("Count cannot be negative")
        }
        else{
            setCountValue(count*2);
            console.log(count);
        }
    }
  return (
    <div>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>decrement</button>
    <button onClick={multiplyCounter}>Multiply</button>
    </div>
  )
}

export default Count