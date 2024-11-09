import { CategoryRounded, Toc } from '@mui/icons-material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Navigation } from '@toolpad/core/AppProvider';


// Define the base navigation items
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
        segment: 'createauthinfo',
        title: 'Create new Auth-Info',
        icon: <NoteAddIcon />,
    },
    {
        segment: 'createcategory',
        title: 'Create new Category',
        icon: <CategoryRounded />,
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
        title: 'Browse',
    },
    {
        segment: 'authinfo',
        title: 'Browse Authentication info',
        icon: <BrowserUpdatedIcon />,
    },
    {
        segment: 'category',
        title: 'Browse Category',
        icon: <Toc />,
        children: [], // Placeholder for dynamic categories
    },
];

