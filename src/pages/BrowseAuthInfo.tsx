import Grid from '@mui/material/Grid2';
import { PostCard } from '../components/PostCard/PostCard';
import { Box } from '@mui/material';
import { useDB } from '../hooks/useFirebase';

const BrowseAuthInfo = () => {
    const { authInfos, category } = useDB()


    return (
        <Box>
            <Grid container spacing={2}>
                {authInfos.map((data, index) =>
                    <Grid size={{ sm: 12, md: 6, lg: 4 }} mb={3} key={index}>
                        <PostCard
                            // catagory={category.map((cat) => {
                            //     if (cat.id === data.category)
                            //         cat.category
                            // })}
                            website={data.website}
                            email={data.email}
                            password={data.password}
                            userName={data.username} />
                    </Grid>
                )
                }
            </Grid>
        </Box>
    )
}

export default BrowseAuthInfo
