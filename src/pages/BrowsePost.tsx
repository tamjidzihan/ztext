import Grid from '@mui/material/Grid2';
import { InteractiveCard } from '../components/UserCard';
// import { Typography } from '@mui/material';

const BrowsePost = () => {
    const loops = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


    return (
        <Grid container spacing={2}>
            {loops.map((_num, index) =>
                <Grid size={{ sm: 12, md: 6, lg: 4 }} mb={3} key={index}>
                    <InteractiveCard />
                </Grid>
            )
            }
        </Grid>
    )
}

export default BrowsePost
