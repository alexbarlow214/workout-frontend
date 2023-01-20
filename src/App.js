import React, { useState, useEffect } from 'react';
import Exercises from "./Exercises";

function App() {
  const [exercises, setExercises] = useState([])
  useEffect(() => {
    fetch("http://localhost:8002/exercise")
      .then((res) => res.json())
      .then((data) => setExercises(data.data));
  }, []);
  
 return (
  <>
    <Exercises exercises = {exercises}/>
    <input type="text" />
  </>
 );
}

export default App;
