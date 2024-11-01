import React, { useState } from 'react';
import { TextField, Button, Box, Typography, SnackbarCloseReason } from '@mui/material';
import { useDB } from '../hooks/useFirebase';
import Notification from '../components/Notification';

const CreateAuthInfoPage: React.FC = () => {
    const { postAuthInfo } = useDB();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [key, setKey] = useState(0);  // State to trigger rerender

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await postAuthInfo(formData.email, formData.password, formData.username);

        setNotificationMessage(`${formData.username}: Auth Info created`);
        setNotificationOpen(true);

        setFormData({ username: '', email: '', password: '' });
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
            sx={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem', maxWidth: '100%' }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Authentication Information
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                <Button type="submit" variant="contained" fullWidth>
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
