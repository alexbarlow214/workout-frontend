import React, { useState, useEffect, useRef } from 'react';
import Exercises from "./Exercises";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {v4 as uuidv4} from 'uuid';
import Topbar from "./scenes/global/TopBar"

function App() {
  const inputRef = useRef()
  const [theme, colorMode] = useMode();
  async function handleInput(e){
    const name = inputRef.current.value
    await fetch("http://localhost:8002/exercise", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: name,
    type: 0,
  })
})
    
    setRetrieve(oldEx => {
      return !oldEx
    })
    console.log(shouldRetrieve)
    console.log(name)

  }

  // const [exercises2, setExercises2] = useState([{id: 1, name: "hi"}, {id:2, name: "hello"}])


  const[shouldRetrieve, setRetrieve] = useState(true)

  const [exercises, setExercises] = useState([])
  useEffect(() => {
    fetch("http://localhost:8002/exercise")
      .then((res) => res.json())
      .then((data) => setExercises(data.data));
  }, [shouldRetrieve]);
  
 return (
  <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className = "app">
            <main className ="content">
              <Topbar />
              <Exercises exercises = {exercises}/>
              <input type="text" ref={inputRef}/>
              <button onClick={handleInput} >Click me! </button>
              <button onClick={colorMode.toggleColorMode} >Switch </button>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </>
 );
}

export default App;
