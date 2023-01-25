import { useState } from "react";
import { ProSidebar, Menu, MenuItem,  } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css"
import {Box, Divider, IconButton, Typography, useTheme} from '@mui/material'
import { Link } from "react-router-dom";
import { tokens } from "../../theme"
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DateRangeIcon from '@mui/icons-material/DateRange';import TimelineIcon from '@mui/icons-material/Timeline';
import MenuIcon from '@mui/icons-material/Menu'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';

const Item = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem 
        active={selected === title} 
        style={{color: colors.grey[100]}}
        onClick = {() => setSelected(title)}
        icon={icon}>
            <Typography variant="h4">{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}



const SideBar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollasped, setIsCollasped] = useState(false)
    const[selected, setSelected] = useState("Home")
    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[600]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: `transparent !important`
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: `${colors.gold[500]} !important`
            },
            "& .pro-menu-item.active": {
                color: `${colors.gold[500]} !important`            
            },
            

        }}>
            <ProSidebar collapsed={isCollasped}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollasped(!isCollasped)}
                        icon = {isCollasped ? <MenuIcon/> : undefined}
                        style = {{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollasped && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    
                                </Typography>
                                <IconButton onClick = {() => setIsCollasped(!isCollasped)}>
                                    <MenuIcon />
                                </IconButton>

                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    {!isCollasped && (
                        <Box mb="25px">
                            <Box display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <img 
                                    alt="profile-user"
                                    width = "100px"
                                    height = "100px"
                                    src = {`../../icon.png`}
                                    style ={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                 

                        <Box textAlign="center">
                            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Alex Barlow</Typography>
                            <Typography variant = "h5" color={colors.gold[500]}>Overload</Typography>
                        </Box>
                    </Box>
                    )}
                    {/* Menu Items */}
                    <Box paddingLeft={isCollasped ? undefined : "10%"}>
                        <Item 
                            title = "Home"
                            to = "/"
                            icon = {<HomeIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {!isCollasped ? (
                        <Typography variant ="h4" color={colors.grey[500]} sx={{m: "15px 0 5px 20px"}}>
                            Manage Workouts
                        </Typography>
                        ) : (<Divider sx={{m: "15px 0 15px 0"}}/>)}
                        <Item 
                            title = "Enter Workout"
                            to = "/"
                            icon = {<FactCheckOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                        title = "Create Workouts"
                        to = "/"
                        icon = {<LibraryAddRoundedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                            title = "Training Splits"
                            to = "/"
                            icon = {<CalendarViewWeekIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />                                           
                        {!isCollasped ? (
                        <Typography variant ="h4" color={colors.grey[500]} sx={{m: "15px 0 5px 20px"}}>
                            Analytics
                        </Typography>)
                         : (<Divider sx={{m: "15px 0 15px 0"}}/>)}
                        <Item 
                            title = "Frequency"
                            to = "/"
                            icon = {<DateRangeIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title = "Progression"
                            to = "/"
                            icon = {<TimelineIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {!isCollasped ? (
                        <Typography variant ="h4" color={colors.grey[500]} sx={{m: "15px 0 5px 20px"}}>
                            Community
                        </Typography>)
                        : (<Divider sx={{m: "15px 0 15px 0"}}/>)}
                        <Item 
                            title = "Friends"
                            to = "/"
                            icon = {<PeopleIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                        <Item 
                            title = "Tutorials"
                            to = "/"
                            icon = {<OndemandVideoIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>

        </Box>
    )
}

export default SideBar;