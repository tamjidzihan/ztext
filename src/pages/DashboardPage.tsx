import Grid from '@mui/material/Grid2';
import { Avatar, Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

const DashboardPage = () => {

    const activityData = [
        { name: 'Jan', uv: 4000 },
        { name: 'Feb', uv: 3000 },
        { name: 'Mar', uv: 2000 },
        { name: 'Apr', uv: 2780 },
        { name: 'May', uv: 1890 },
        { name: 'June', uv: 1690 },
        { name: 'July', uv: 890 },
        { name: 'Aug', uv: 790 },
        { name: 'Sep', uv: 690 },
        { name: 'Oct', uv: 590 },
        { name: 'Nov', uv: 490 },
        { name: 'Dec', uv: 3890 }
    ];

    const securityData = [
        { name: 'Q1', pv: 2400 },
        { name: 'Q2', pv: 1398 },
        { name: 'Q3', pv: 9800 },
        { name: 'Q4', pv: 3908 },
    ];



    const storageData = [
        { name: 'Used', value: 40 },
        { name: 'Available', value: 60 },
    ];

    const topUsers = [
        { name: 'Alice', activity: 'Logged In', avatar: 'A' },
        { name: 'Bob', activity: 'Viewed Dashboard', avatar: 'B' },
        { name: 'Charlie', activity: 'Updated Profile', avatar: 'C' },
        { name: 'Daisy', activity: 'Changed Password', avatar: 'D' },
    ];



    return (
        <Box sx={{ padding: 4 }}>
            <Grid container spacing={4}>
                {/* Overview Cards */}
                <Grid size={3}>
                    <Card sx={{
                        bgcolor: 'primary.main',
                        color: 'white'
                    }}>
                        <CardContent>
                            <Typography variant="h6">Total Users</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <GroupIcon fontSize="large" />
                                <Typography variant="h4" sx={{ ml: 2 }}>1,254</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={3}>
                    <Card sx={{ bgcolor: 'secondary.main', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Recent Logins</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <SecurityIcon fontSize="large" />
                                <Typography variant="h4" sx={{ ml: 2 }}>342</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={3}>
                    <Card sx={{ bgcolor: 'success.main', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Security Alerts</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <TrendingUpIcon fontSize="large" />
                                <Typography variant="h4" sx={{ ml: 2 }}>29</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={3}>
                    <Card sx={{ bgcolor: 'warning.main', color: 'white' }}>
                        <CardContent>
                            <Typography variant="h6">Storage Usage</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <StorageIcon fontSize="large" />
                                <Typography variant="h4" sx={{ ml: 2 }}>40%</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Charts Section */}
                <Grid size={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Security Overview</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={securityData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Storage Usage</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', mx: "10px" }} >
                                <Typography variant="caption" gutterBottom >
                                    <Box component="span" sx={{ color: '#d9675f' }}> — </Box>
                                    Used
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                    <Box component="span" sx={{ color: '#44a12a' }}> — </Box>
                                    Available
                                </Typography>
                            </Box>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={storageData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#44a12a"
                                        dataKey="value"
                                        label
                                    >
                                        <Cell key="Used" fill="#d9675f" />
                                        <Cell key="Available" fill="#44a12a" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Activity Over Time</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={activityData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* User Activity Table */}
                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recent User Activity</Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>User</TableCell>
                                        <TableCell>Activity</TableCell>
                                        <TableCell>Avatar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {topUsers.map((user, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.activity}</TableCell>
                                            <TableCell><Avatar>{user.avatar}</Avatar></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </Box >
    );
};

export default DashboardPage;
