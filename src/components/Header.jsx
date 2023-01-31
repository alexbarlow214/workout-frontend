import { useTheme, Typography, Box } from "@mui/material"
import { tokens } from "../theme"



export default function Header({title, subtitle}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
    return (
    <Box mb = "30px">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb: "5px"}}>
            {title}
        </Typography>
        <Typography variant ="h4" color={colors.red[500]}>
            {subtitle}
        </Typography>
    </Box>
  )
}
