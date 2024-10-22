import Grid from '@mui/material/Grid2';
import { CustomSkeleton } from '../components/Skeleton';
import { Typography } from '@mui/material';

const OrdersPage = () => {
    return (
        <Grid container spacing={1}>
            <Typography variant='h3'> Demo Heading</Typography>
            <Grid size={5} />
            <Grid size={12}>
                <CustomSkeleton height={14} />
            </Grid>
            <Grid size={12}>
                <CustomSkeleton height={14} />
            </Grid>
            <Grid size={4}>
                <CustomSkeleton height={100} />
            </Grid>
            <Grid size={8}>
                <CustomSkeleton height={100} />
            </Grid>

            <Grid size={12}>
                <CustomSkeleton height={150} />
            </Grid>
            <Grid size={12}>
                <CustomSkeleton height={14} />
            </Grid>

            <Grid size={3}>
                <CustomSkeleton height={100} />
            </Grid>
            <Grid size={3}>
                <CustomSkeleton height={100} />
            </Grid>
            <Grid size={3}>
                <CustomSkeleton height={100} />
            </Grid>
            <Grid size={3}>
                <CustomSkeleton height={100} />
            </Grid>
        </Grid>
    );
};

export default OrdersPage;