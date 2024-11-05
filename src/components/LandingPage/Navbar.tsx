import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from '@toolpad/core/internal';

const Navbar = () => {
    return (
        <AppBar position="static" color="primary" sx={{ borderRadius: "60px" }}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>

                {/* Sign In Button */}
                <Box>
                    <Button color="inherit"><Link></Link>Sign In</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
