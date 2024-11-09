import Grid from '@mui/material/Grid2';
import { PostCard } from '../components/PostCard/PostCard';
import { Box } from '@mui/material';
import { useDB } from '../hooks/useFirebase';

const BrowseAuthInfo = () => {
    const { authInfos, category, deleteAuthInfo } = useDB()

    const getCategoryName = (categoryId: string) => {
        return category.find((cat) => cat.id === categoryId)?.category || 'Unknown Category';
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {authInfos.map((data, index) =>
                    <Grid size={{ sm: 12, md: 6, lg: 4 }} mb={3} key={index + 1}>
                        <PostCard
                            catagory={getCategoryName(data.category)}
                            website={data.website}
                            email={data.email}
                            password={data.password}
                            userName={data.username}
                            otherInfo={data.otherInfo}
                            onDelete={() => deleteAuthInfo(data.id)}
                        />
                    </Grid>
                )
                }
            </Grid>
        </Box>
    )
}

export default BrowseAuthInfo
