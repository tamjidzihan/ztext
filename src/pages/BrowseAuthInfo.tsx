import Grid from '@mui/material/Grid2';
import { PostCard } from '../components/PostCard/PostCard';
import { Box } from '@mui/material';
import { useDB } from '../hooks/useFirebase';
import EditAuthInfoPage from './EditAuthInfoPage';
import { useState } from 'react';

const BrowseAuthInfo = () => {
    const { authInfos, category, deleteAuthInfo } = useDB()
    const [selectedAuthInfoId, setSelectedAuthInfoId] = useState<string | null>(null);

    const getCategoryName = (categoryId: string) => {
        return category.find((cat) => cat.id === categoryId)?.category || 'Unknown Category';
    };

    // Handle the edit action
    const handleEdit = (authInfoId: string) => {
        setSelectedAuthInfoId(authInfoId); // Set the ID of the item being edited
    };

    // Close the edit modal/page
    const handleCloseEdit = () => {
        setSelectedAuthInfoId(null); // Clear the selected authInfoId
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {authInfos.map((data, index) =>
                    <Grid size={{ sm: 12, md: 6, lg: 4 }} mb={3} key={index + 1}>
                        <PostCard
                            authInfoId={data.id}
                            catagory={getCategoryName(data.category)}
                            website={data.website}
                            email={data.email}
                            password={data.password}
                            userName={data.username}
                            otherInfo={data.otherInfo}
                            onEdit={() => handleEdit(data.id)}
                            onDelete={() => deleteAuthInfo(data.id)}
                        />
                    </Grid>
                )}
            </Grid>
            {selectedAuthInfoId && (
                <EditAuthInfoPage
                    authInfoId={selectedAuthInfoId}
                    onClose={handleCloseEdit} // Close function to reset selectedAuthInfoId
                />
            )}
        </Box>
    )
}

export default BrowseAuthInfo
