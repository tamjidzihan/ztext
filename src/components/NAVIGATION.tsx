import { Navigation } from '@toolpad/core/AppProvider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';


// eslint-disable-next-line react-refresh/only-export-components
const LogoutButton = () => {
    const { logOut } = useAuth()
    return (
        <Box onClick={logOut}>LogOut</Box>
    )
}

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },

    {
        kind: 'divider',
    },

    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        kind: 'page',
        action: <LogoutButton />
    },
];