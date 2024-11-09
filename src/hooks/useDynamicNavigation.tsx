import { useEffect, useState } from "react";
import { useDB } from "./useFirebase";
import { NAVIGATION } from "../components/NavigationBar";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { Navigation } from '@toolpad/core/AppProvider';


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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setDynamicNavigation((prev: any) => {
            const navigationCopy = [...prev];
            navigationCopy[navigationCopy.length - 1] = updatedNavigation; // Replace last item with updated
            return navigationCopy;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return dynamicNavigation;
};
