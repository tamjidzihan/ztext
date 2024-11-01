import { TerminalOutlined, Toc, TrafficOutlined } from '@mui/icons-material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PageviewIcon from '@mui/icons-material/Pageview';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Navigation } from '@toolpad/core/AppProvider';


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
        segment: 'collections',
        title: 'Browse Collections',
        icon: <Toc />,
        children: [
            {
                segment: 'code',
                title: 'Code',
                icon: <TerminalOutlined />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <TrafficOutlined />,
            },
        ],
    }
];