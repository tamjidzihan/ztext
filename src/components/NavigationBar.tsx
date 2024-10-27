import { Navigation } from '@toolpad/core/AppProvider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import PageviewIcon from '@mui/icons-material/Pageview';


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
        segment: 'search',
        title: 'Search',
        icon: <PageviewIcon />,
    },
    {
        kind: 'divider',
    },

    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'browsepost',
        title: 'Browse Post',
        icon: <BrowserUpdatedIcon />,
    },
    {
        segment: 'explore',
        title: 'Explore',
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
    }
];