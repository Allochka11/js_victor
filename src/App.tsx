import React from 'react';
import './App.css';


function App() {
  type StudentsType = {
    name:string
    age:number
    isMarried: boolean
    scores:number
  }
  const students = [
    {name:"Bob", age:26, isMarried: true,scores: 85},
    {name:"Alex", age:21, isMarried: true,scores: 89},
    {name:"Nick", age:2, isMarried: true,scores: 120},
    {name:"John", age:19, isMarried: true,scores: 100},
  ];




  return (
    <div className="App">




    </div>
  );
}

export default App;
