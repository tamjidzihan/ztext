import { Navigation } from '@toolpad/core/AppProvider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { MenuBook, Store, TrafficRounded } from '@mui/icons-material';


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
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
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
        segment: 'integrations',
        title: 'Integrations',
        icon: <LayersIcon />,
    },


    {
        kind: 'divider'
    },


    {
        kind: 'header',
        title: 'Book Space'
    },
    {
        segment: 'bookshop',
        title: 'Book Shop',
        icon: <MenuBook />,
        children: [
            {
                segment: 'store',
                title: 'Store',
                icon: <Store />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <TrafficRounded />,
            },
        ],
    },

];