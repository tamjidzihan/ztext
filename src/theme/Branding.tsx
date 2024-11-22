import { Box } from "@mui/material";
import ztext_logo from '../assets/ztext_logo.png'

export const branding = {
    title: 'Auth Manager', // Your brand title here
    logo: (
        <Box display="flex" alignItems="center">
            <img src={ztext_logo} alt="Z-Auth manager" />
        </Box>
    ),
};