import React from 'react';
import './App.css';
import Counter from './components/Counter';
import decreaseCounter from "./components/DecreaseCounter"
import IncreaseCounter from "./components/IncreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
function App() {
  return (
    <div >
     <Counter/>
     <decreaseCounter/>
     <IncreaseCounter/>
     <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
