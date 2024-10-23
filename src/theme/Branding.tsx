import { Box } from "@mui/material";
import ztext_logo from '../assets/ztext_logo.png'

export const branding = {
    title: 'Ztext', // Your brand title here
    logo: (
        <Box display="flex" alignItems="center">
            <img src={ztext_logo} alt="Ztext Logo" />
        </Box>
    ),
};