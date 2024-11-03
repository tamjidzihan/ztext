import React, { useState } from 'react'
import { useDB } from '../hooks/useFirebase'
import { Box, Button, TextField, Typography, SnackbarCloseReason } from '@mui/material'
import Notification from '../components/Notification';

const CreateCategoryPage = () => {
    const { postCategory } = useDB()
    const [formData, setFormData] = useState({
        category: ''
    })
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [key, setKey] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await postCategory(formData.category)
        setNotificationMessage(`${formData.category} created Successfully`);
        setNotificationOpen(true);
        setFormData({ category: '' });
        setKey((prevKey) => prevKey + 1);
    }

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
                New Category:
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                    required
                    label="Catagory Name"
                    variant="outlined"
                    fullWidth
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, maxWidth: "100px" }}>
                    Create
                </Button>
            </form>

            {/* Notification component */}
            <Notification
                message={notificationMessage}
                open={notificationOpen}
                handleClose={handleNotificationClose}
            />
        </Box>
    )
}

export default CreateCategoryPage
