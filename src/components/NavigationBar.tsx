// import { CategoryRounded, TerminalOutlined, Toc, TrafficOutlined } from '@mui/icons-material';
// import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PageviewIcon from '@mui/icons-material/Pageview';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
// import { Navigation } from '@toolpad/core/AppProvider';


// export const NAVIGATION: Navigation = [
//     {
//         kind: 'header',
//         title: 'Main items',
//     },
//     {
//         segment: 'dashboard',
//         title: 'Dashboard',
//         icon: <DashboardIcon />,
//     },
//     {
//         segment: 'createauthinfo',
//         title: 'Create new Auth-Info',
//         icon: <NoteAddIcon />,
//     },
//     {
//         segment: 'createcategory',
//         title: 'Create new Categry',
//         icon: <CategoryRounded />,
//     },
//     {
//         segment: 'search',
//         title: 'Search',
//         icon: <PageviewIcon />,
//     },
//     {
//         kind: 'divider',
//     },

//     {
//         kind: 'header',
//         title: 'Browse',
//     },
//     {
//         segment: 'authinfo',
//         title: 'Browse Authentication info',
//         icon: <BrowserUpdatedIcon />,
//     },
//     {
//         segment: 'catagory',
//         title: 'Browse Catagory',
//         icon: <Toc />,
//         children: [
//             {
//                 segment: 'code',
//                 title: 'Code',
//                 icon: <TerminalOutlined />,
//             },
//             {
//                 segment: 'traffic',
//                 title: 'Traffic',
//                 icon: <TrafficOutlined />,
//             },
//         ],
//     }
// ];



import {
    CategoryRounded,
    Toc
} from '@mui/icons-material';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Navigation } from '@toolpad/core/AppProvider';
import { useEffect, useState } from 'react';
import { useDB } from '../hooks/useFirebase'; // Adjust the path as needed



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

export const useDynamicNavigation = () => {
    const { category } = useDB();
    const [dynamicNavigation, setDynamicNavigation] = useState<Navigation>(NAVIGATION);

    useEffect(() => {
        // Create the category children array with random icons
        const categoryChildren = category.map((cat) => ({
            segment: cat.id,
            title: cat.category,
            icon: <SpeakerNotesIcon />,
        }));

        // Update the navigation structure to include dynamic categories
        const updatedNavigation = {
            ...dynamicNavigation[dynamicNavigation.length - 1], // Get the last item (the Browse Category item)
            children: categoryChildren, // Insert dynamically created categories
        };

        // Update the dynamicNavigation state
        setDynamicNavigation((prev) => {
            const navigationCopy = [...prev];
            navigationCopy[navigationCopy.length - 1] = updatedNavigation; // Replace last item with updated
            return navigationCopy;
        });
    }, [category, dynamicNavigation]);

    return dynamicNavigation;
};
