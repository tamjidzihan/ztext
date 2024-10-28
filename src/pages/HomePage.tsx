import { Box, Button, Card, CardContent, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const testimonials = [
    {
        quote: "This tool has changed the way I manage my online life. Highly recommended!",
        author: "Jane Doe",
    },
    {
        quote: "The best password management solution. Safe and easy to use.",
        author: "John Smith",
    },
    {
        quote: "I've tried many, but this one stands out in both security and simplicity.",
        author: "Sarah Lee",
    },
    {
        quote: "Excellent support and reliable security. A must-have for everyone!",
        author: "Michael Brown",
    },
];

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', py: 10, bgcolor: 'primary.main', color: 'white', borderRadius: 2, mb: 4 }}>
                <Typography variant="h2" gutterBottom>Secure Your Passwords Effortlessly</Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    Manage and protect your digital identity with top-notch security.
                </Typography>
                <Button variant="contained" color="secondary" size="large">Get Started</Button>
            </Box>

            {/* Features Section */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid size={4} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Top-notch Security</Typography>
                            <SecurityIcon color="primary" sx={{ fontSize: 60 }} />
                            <Typography variant="body2">
                                Built with advanced encryption algorithms to keep your data safe.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Easy to Use</Typography>
                            <LockIcon color="secondary" sx={{ fontSize: 60 }} />
                            <Typography variant="body2">
                                Manage your passwords efficiently with a user-friendly dashboard.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>Community Trusted</Typography>
                            <GroupIcon color="success" sx={{ fontSize: 60 }} />
                            <Typography variant="body2">
                                Join thousands of satisfied users securing their online presence.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Testimonials Section */}
            <Box sx={{ mb: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>What Our Users Say</Typography>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid key={index} size={6} >
                            <Card sx={{ p: 2, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="body1" gutterBottom>
                                    "{testimonial.quote}"
                                </Typography>
                                <Typography variant="subtitle2" align="right">- {testimonial.author}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* How It Works Section */}
            <Box sx={{ mb: 8 }}>
                <Typography sx={{ mb: 5 }} variant="h4" align="center" gutterBottom>How It Works</Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mb: 9 }}>
                    <Grid size={7}>
                        <CheckCircleIcon color="primary" sx={{ fontSize: 60 }} />
                        <Typography variant="h6" gutterBottom>Create Your Account</Typography>
                        <Typography variant="body2">
                            Sign up and create a secure account to manage your passwords.
                        </Typography>
                    </Grid>
                    <Grid size={7}>
                        <CheckCircleIcon color="secondary" sx={{ fontSize: 60 }} />
                        <Typography variant="h6" gutterBottom>Store Your Passwords</Typography>
                        <Typography variant="body2">
                            Save your passwords in our secure vault, accessible only by you.
                        </Typography>
                    </Grid>
                    <Grid size={7}>
                        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
                        <Typography variant="h6" gutterBottom>Access Anywhere</Typography>
                        <Typography variant="body2">
                            Securely access your passwords from any device, anytime.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>Ready to Protect Your Online Identity?</Typography>
                <Button variant="contained" color="primary" size="large">Sign Up Now</Button>
            </Box>
        </Container>
    );
};

export default HomePage;
