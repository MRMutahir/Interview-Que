import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [num, setnum] = useState();
  useEffect(()=>{
    console.log(num);
  },[num])
  return (
    <div className="App">
      <select onChange={(e)=> setnum(e.target.value)}>
     {Array.from([1,2,3,4,5,6,7,8,9,10],(x)=> <option key={x}>{x}</option>)}
      </select>
    </div>
  );
}

export default App;
