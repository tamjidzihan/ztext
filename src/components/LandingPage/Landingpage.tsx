import { Box, Button, Card, Typography, Container, Modal, keyframes } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PeopleIcon from '@mui/icons-material/People';
import Navbar from './Navbar';
import React from 'react';
import LogIn from './LogIn';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pb: 10,
    borderRadius: 5
};


const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;


const Landingpage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Navbar signIn={handleOpen} />
            <Container maxWidth="lg">
                <Box sx={{ mb: 3, mt: 5 }}>
                    {/* Hero Section */}
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 10,
                            color: 'white',
                            borderRadius: 2,
                            mb: 6,
                            background: 'linear-gradient(45deg, #f44369, #242acf)',
                            backgroundSize: '200% 200%',
                            animation: `${gradientAnimation} 8s ease infinite`
                        }}
                    >
                        <Typography variant="h2" gutterBottom>Secure Your Passwords Effortlessly</Typography>
                        <Typography variant="h6" sx={{ mb: 4 }}>
                            Manage and protect your digital identity with cutting-edge security.
                        </Typography>
                        <Button variant="contained" color="secondary" size="large" onClick={handleOpen}>Get Started for Free</Button>
                    </Box>
                </Box>
                {/* Features Section */}
                <Typography variant="h4" align="center" sx={{ mb: 4 }}>Key Features</Typography>
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    <Grid size={{ sm: 12, md: 4 }} >
                        <Card sx={{ textAlign: 'center', p: 4 }}>
                            <SecurityIcon color="primary" sx={{ fontSize: 80, mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Top-notch Security</Typography>
                            <Typography variant="body2">
                                Advanced encryption algorithms ensure your data stays safe.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid size={{ sm: 12, md: 4 }} >
                        <Card sx={{ textAlign: 'center', p: 4 }}>
                            <LockIcon color="secondary" sx={{ fontSize: 80, mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Easy to Use</Typography>
                            <Typography variant="body2">
                                Simple and intuitive interface for hassle-free password management.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid size={{ sm: 12, md: 4 }} >
                        <Card sx={{ textAlign: 'center', p: 4 }}>
                            <GroupIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
                            <Typography variant="h5" gutterBottom>Community Trusted</Typography>
                            <Typography variant="body2">
                                Join thousands who trust us to protect their online presence.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

                {/* Testimonials Section */}
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>What Our Users Say</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {testimonials.map((testimonial, index) => (
                            <Grid key={index} size={6} >
                                <Card sx={{ p: 3, borderRadius: 2, height: '100%' }}>
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
                    <Typography variant="h4" align="center" gutterBottom>How It Works</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid size={12} textAlign="center">
                            <CheckCircleIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Create Your Account</Typography>
                            <Typography variant="body2">
                                Sign up and create a secure account to start managing your passwords.
                            </Typography>
                        </Grid>
                        <Grid size={12} textAlign="center">
                            <CheckCircleIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Store Your Passwords</Typography>
                            <Typography variant="body2">
                                Save your passwords in our secure vault, accessible only by you.
                            </Typography>
                        </Grid>
                        <Grid size={12} textAlign="center">
                            <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Access Anywhere</Typography>
                            <Typography variant="body2">
                                Securely access your passwords from any device, anytime.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Additional Section - Why Choose Us */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" align="center" gutterBottom>Why Choose Us?</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid size={3} textAlign="center">
                            <StarIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Top Ratings</Typography>
                            <Typography variant="body2">
                                Consistently rated as one of the most secure password managers.
                            </Typography>
                        </Grid>
                        <Grid size={3} textAlign="center">
                            <ContactSupportIcon color="secondary" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>24/7 Support</Typography>
                            <Typography variant="body2">
                                Our support team is available anytime you need assistance.
                            </Typography>
                        </Grid>
                        <Grid size={3} textAlign="center">
                            <PeopleIcon color="success" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="h6" gutterBottom>Trusted by Experts</Typography>
                            <Typography variant="body2">
                                Recommended by cybersecurity professionals worldwide.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'secondary.main', color: 'white', borderRadius: 2, mb: 6 }}>
                    <Typography variant="h4" gutterBottom>Ready to Secure Your Online Identity?</Typography>
                    <Typography variant="h6" sx={{ mb: 4 }}>Join thousands of users already taking control of their security.</Typography>
                    <Button onClick={handleOpen} variant="contained" color="primary" size="large">Sign Up Today</Button>
                </Box>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <LogIn />
                    </Box>
                </Modal>
            </Container >
        </>
    );
};

export default Landingpage;
