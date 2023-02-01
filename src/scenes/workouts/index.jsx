import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Exercises from "../../Exercises";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Divider,
  CheckBox,
  Button,
} from "@mui/material";
import { useState, useEffect, inputRef } from "react";
import Header from "../../components/Header";
import { mock } from "./mock";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { borderColor } from "@mui/system";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

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
      flex: 0,
      width: 150,
      align: "center",
      renderCell: ({ row: { type } }) => {
        return (
          <>
            {type === "Chest" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.greenAccent[400] }}
              />
            )}
            {type === "Legs" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.greenAccent[700] }}
              />
            )}
            {type === "Bicep" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.blueAccent[400] }}
              />
            )}
            {type === "Tricep" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.blueAccent[700] }}
              />
            )}
            {type === "Back" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.redAccent[700] }}
              />
            )}
            {type === "Sholder" && (
              <FitnessCenterOutlinedIcon
                sx={{ mr: "10px" }}
                style={{ color: colors.redAccent[400] }}
              />
            )}
            <Typography variant="h4">{type}</Typography>
          </>
        );
      },
    },
    {
      field: "PR",
      headerName: "PR",
      headerAlign: "center",
      flex: 0,
      width: 150,
      align: "center",
      renderCell: ({ row: { PR } }) => {
        var a = PR.split("X");
        const forS = " for ";
        return (
          <>
            <Typography mr={1} color={colors.gold[400]} variant="h4">
              {a[0]}{" "}
            </Typography>
            <Typography>for</Typography>
            <Typography ml={1} color={colors.red[400]} variant="h4">
              {" "}
              {a[1]}
            </Typography>
          </>
        );
      },
    },
    {
      field: "edit",
      headerName: "Modify",
      headerAlign: "left",
      align: "center",
      flex: 0,
      width: 100,
      renderCell: ({ row: { edit } }) => {
        return (
          <Box display="flex" justifyContent="center">
            {edit === 1 && (
              <IconButton>
                <EditIcon />
              </IconButton>
            )}
            {edit === 1 && (
              <IconButton>
                <DeleteIcon sx={{ color: `${colors.redAccent[600]} ` }} />{" "}
              </IconButton>
            )}
          </Box>
        );
      },
    },
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
      <Box display="flex" sx={{ flexDirection: "row" }}>
        <Box
          flex="1"
          mr="20px"
          height="83vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none", fontSize: "1.25rem" },
            "& .MuiDataGrid-cell": { border: "none" },
            "& .name-column-cell": { border: "none", fontWeight: "bold" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.primary[600],
              borderBottom: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.primary[600],
            },
          }}
        >
          <Box
            flex="1"
            display="flex"
            sx={{ flexDirection: "row" }}
            alignItems="center"
            mb="15px"
          >
            <Typography
              justifyContent="center"
              flex="1"
              align="center"
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
            >
              Exercises
            </Typography>
            <Button
              flex="1"
              align="right"
              sx={{
                color: "black",
                backgroundColor: colors.greenAccent[600],
                borderRadius: 2,
                borderColor: colors.greenAccent[600],
                typography: "h4",
                fontWeight: "bold",
                '&:hover': {
                  color: colors.greenAccent[600],
                  backgroundColor: "white",
                  borderColor:  colors.greenAccent[600]
                },
              }}
              startIcon={<AddCircleSharpIcon />}
              variant="outlined"
            >
              New
            </Button>
          </Box>
          <DataGrid
            rows={mock}
            columns={columns}
            rowsPerPageOptions={[13]}
            pageSize={13}
            checkboxSelection="true"
          />
        </Box>
        <Divider
          flexItem="true"
          orientation="vertical"
          flex="1"
          sx={{ bgcolor: colors.grey[300] }}
        />
        <Box
          flex="1"
          ml="20px"
          height="77vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none", fontSize: "1.25rem" },
            "& .MuiDataGrid-cell": { border: "none" },
            "& .name-column-cell": { border: "none", fontWeight: "bold" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.primary[600],
              borderBottom: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.primary[600],
            },
          }}
        >
          {console.log(theme.typography.h2.fontSize)}
          {/* {console.log(exercises)} */}
          <DataGrid
            rows={mock}
            columns={columns}
            rowsPerPageOptions={[12]}
            pageSize={12}
          />
        </Box>
      </Box>
    </Box>
  );
}
