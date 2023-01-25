import {Box, IconButton, useTheme, InputBase, Typography} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';



const TopBar = () =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return(<Box display = "flex" justifyContent="space-between" p={2} >
        {/* search nar*/}
        {/* <Box display="flex" alignItems="center" > */}
        <Box display="flex" ml = "10px"
                                justifyContent="center"
                                alignItems="center">
                                <img 
                                    alt="profile-user"
                                    width = "204.67px"
                                    height = "53.67px"
                                    src = {`../../newest.png`}
                                    
                                />
                            </Box>
            {/* <Typography variant = "h2" color={colors.greenAccent[500]} ml="20px">Overload</Typography> */}
        {/* </Box> */}
        <Box 
            display="flex" 
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
        >
            <InputBase sx={{ml : 2, flex : 1}} placeholder ="Search"/>
            <IconButton type="button" sx={{p: 1}}>
                <SearchIcon/>
            </IconButton>
        </Box >
        {/* ICONS */}
        <Box alignItems="center" display="flex" >
            <IconButton onClick ={colorMode.toggleColorMode}>
                {theme.palette.mode === 'light' ? (
                <LightModeIcon/> ) : (
                    <DarkModeIcon/>
                )}
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <PersonIcon/>
            </IconButton>
        </Box>
    </Box>)
}

export default TopBar;