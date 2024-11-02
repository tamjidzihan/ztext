import React, { useState } from 'react';
import { TextField, Button, Box, Typography, SnackbarCloseReason } from '@mui/material';
import { useDB } from '../hooks/useFirebase';
import Notification from '../components/Notification';
import { CustomTextareaAutosize } from '../theme/customization/CustomTextareaAutosize';

const CreateAuthInfoPage: React.FC = () => {
    const { postAuthInfo } = useDB();
    const [formData, setFormData] = useState({
        website: '',
        username: '',
        email: '',
        password: '',
        otherInfo: ''
    });
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [key, setKey] = useState(0);  // State to trigger rerender

    // Allow handleChange to handle both input and textarea events
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Email validation function
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validate email
        if (formData.email) {
            if (!isValidEmail(formData.email)) {
                setNotificationMessage('Invalid email format');
                setNotificationOpen(true);
                return;
            }
        }
        await postAuthInfo(
            formData.website,
            formData.username,
            formData.email,
            formData.password,
            formData.otherInfo
        );
        setNotificationMessage(`${formData.username}: Auth Info created`);
        setNotificationOpen(true);

        setFormData({ username: '', email: '', password: '', website: '', otherInfo: '' });
        setKey((prevKey) => prevKey + 1);
    };

    const handleNotificationClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason !== 'clickaway') {
            setNotificationOpen(false);
        }
    };

    return (
        <Box
            key={key}
            sx={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem', maxWidth: '400px' }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Authentication Information
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                    required
                    label="Website Name"
                    variant="outlined"
                    fullWidth
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Other Informations
                </Typography>
                <CustomTextareaAutosize
                    minRows={4}
                    style={{ width: '100%', padding: '8px' }}
                    name="otherInfo"
                    aria-label="empty textarea"
                    placeholder="Enter additional information here"
                    value={formData.otherInfo}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, maxWidth: "100px" }}>
                    Submit
                </Button>
            </form>

            {/* Notification component */}
            <Notification
                message={notificationMessage}
                open={notificationOpen}
                handleClose={handleNotificationClose}
            />
        </Box>
    );
};

export default CreateAuthInfoPage;
