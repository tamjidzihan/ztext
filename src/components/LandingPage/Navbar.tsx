import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ztext_logo from '../../assets/ztext_logo.png'
interface NavBarProps {
    signIn: () => void;
}

const Navbar = ({ signIn }: NavBarProps) => {
    return (
        <AppBar position="static" color="primary" >
            <Toolbar>
                {/* Logo */}
                <Box component="img" src={ztext_logo} alt="Ztext Logo" sx={{ width: 50, height: 50 }} />
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="#" underline="none" fontWeight={'bold'} sx={{ color: "white" }}>Ztext</Link>
                </Typography>

                {/* Sign In Button */}
                <Box>
                    <Button variant="contained" color="secondary" size="large" onClick={signIn} sx={{ fontWeight: "bold" }}>Sign In</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
