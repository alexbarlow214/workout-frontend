import { DataGrid }from "@mui/x-data-grid"
import { tokens } from "../../theme"
import Exercises from "../../Exercises";
import { Box, useTheme } from "@mui/material";
import { useState, useEffect, inputRef } from "react";
import Header from "../../components/Header";




export default function Workouts() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = 
    [{ field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell"}, 
    {field: "type", headerName: "Type", type: "number", headerAlign: "left", align: "left"}]
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

      const[shouldRetrieve, setRetrieve] = useState(true)

  const [exercises, setExercises] = useState([])
  useEffect(() => {
    fetch("http://localhost:8002/exercise")
      .then((res) => res.json())
      .then((data) => setExercises(data.data));
  }, [shouldRetrieve]);

    return (
    <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members"/>
        <Box
        m="40px 0 0 0" height = "75vh">
          {console.log(exercises)}
            <DataGrid
                rows={exercises}
                columns={columns}
            />
        </Box>

    </Box>
  )
}
