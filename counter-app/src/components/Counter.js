import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement,incrementByAmount} from '../redux/counter/counterSlice';

const Counter = () => {
    const[amount,setAmount]=useState(3);
  
    const countValue =useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>İncrement</button>
      <br/>
      <br/>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(amount))}>İncrement By Amount</button>

    </div>
  )
}

export default Counter;

