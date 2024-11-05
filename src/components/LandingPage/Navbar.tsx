import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from '@toolpad/core/internal';

interface NavBarProps {
    signIn: () => void;
}

const Navbar = ({ signIn }: NavBarProps) => {
    return (
        <AppBar position="static" color="primary" >
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>

                {/* Sign In Button */}
                <Box>
                    <Button color="inherit" onClick={signIn} ><Link></Link>Sign In</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
