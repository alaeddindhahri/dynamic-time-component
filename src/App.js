import React from 'react';
import './App.css';
import Title from './AppTitle'
import Timer from './Timer'
function App() {
const time=36615;
  return (
    <div className="App">
      <Title/>
      <Timer myList={time}/>
    </div>
  );
}

export default App;
