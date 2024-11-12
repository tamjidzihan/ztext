import Grid from '@mui/material/Grid2';
import { PostCard } from '../components/PostCard/PostCard';
import { Box, Modal } from '@mui/material';
import { useDB } from '../hooks/useFirebase';
import EditAuthInfoPage from './EditAuthInfoPage';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

const BrowseAuthInfo = () => {
    const { authInfos, category, deleteAuthInfo, setAuthInfos } = useDB();
    const { user } = useAuth();
    const [selectedAuthInfoId, setSelectedAuthInfoId] = useState<string | null>(null);
    const [open, setOpen] = React.useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "20px"
    };

    const getCategoryName = (categoryId: string) => {
        return category.find((cat) => cat.id === categoryId)?.category || 'Unknown Category';
    };

    const handleEdit = (authInfoId: string) => {
        if (user) {
            setSelectedAuthInfoId(authInfoId);
            setOpen(true)
        } else {
            console.error("User is not authenticated.");
        }
    };

    const handleCloseEdit = () => {
        setSelectedAuthInfoId(null);
        setOpen(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addNewAuthInfos = (updatedAuthInfo: any) => {
        setAuthInfos((prevAuthInfos) =>
            prevAuthInfos.map((authInfo) =>
                authInfo.id === updatedAuthInfo.id ? updatedAuthInfo : authInfo
            )
        );
    };


    if (!user) {
        return <Box>Error: User is not authenticated.</Box>;
    }

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
                <Modal
                    open={open}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <EditAuthInfoPage
                            addNewAuthInfos={addNewAuthInfos}
                            authInfoId={selectedAuthInfoId}
                            onClose={handleCloseEdit}
                        />
                    </Box>
                </Modal>
            )}

        </Box>
    );
};

export default BrowseAuthInfo;
