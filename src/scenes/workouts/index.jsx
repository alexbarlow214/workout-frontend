import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Exercises from "../../Exercises";
import { Box, Typography, useTheme } from "@mui/material";
import { useState, useEffect, inputRef } from "react";
import Header from "../../components/Header";
import { mock } from "./mock";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Workouts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: ({ row: { type } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
          >
            <FitnessCenterOutlinedIcon sx={{ mr: "10px" }} />
            {type === "Chest" && (
              <Typography color={colors.greenAccent[400]}>{"Chest"}</Typography>
            )}
            {type === "Legs" && (
              <Typography color={colors.greenAccent[700]}>{"Legs"}</Typography>
            )}
            {type === "Bicep" && (
              <Typography color={colors.blueAccent[400]}>{"Bicep"}</Typography>
            )}
            {type === "Tricep" && (
              <Typography color={colors.greenAccent[700]}>
                {"Tricep"}
              </Typography>
            )}
            {type === "Back" && (
              <Typography color={colors.redAccent[700]}>{"Back"}</Typography>
            )}
            {type === "Sholder" && (
              <Typography color={colors.redAccent[400]}>{"Sholder"}</Typography>
            )}
          </Box>
        );
      },
    },
    {
      field: "PR",
      headerName: "PR",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },  
    {
      field: "edit",
      headerName: "Modify",
      headerAlign: "left",
      align: "center",
      flex: 0,
      renderCell: ({ row: { edit } }) => {
        return <Box display="flex" justifyContent="center">
          {edit === 1 && (<EditIcon />) }
          {edit === 1 && (<DeleteIcon sx={{ml:"10px",  color: `${colors.redAccent[600]} !important`}} />) }
        </Box>
      }
    }  
  ];
  async function handleInput(e) {
    const name = inputRef.current.value;
    await fetch("http://localhost:8002/exercise", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        type: 0,
      }),
    });

    // setRetrieve((oldEx) => {
    //   return !oldEx;
    // });
    // console.log(shouldRetrieve);
    // console.log(name);
  }

  // const [shouldRetrieve, setRetrieve] = useState(true);

  // const [exercises, setExercises] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8002/exercise")
  //     .then((res) => res.json())
  //     .then((data) => setExercises(data.data));
  // }, [shouldRetrieve]);

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none", fontSize: "1.5rem" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column-cell": {border: "none", color: colors.gold[500]},
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.primary[700], borderBottom: "none"},
          "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]}
          
        }}
        
      >
        {console.log(theme.typography.h2.fontSize)}
        {/* {console.log(exercises)} */}
        <DataGrid rows={mock} columns={columns} />
      </Box>
    </Box>
  );
}
