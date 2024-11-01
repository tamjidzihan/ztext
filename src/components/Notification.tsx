import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface NotificationProps {
    message: string;
    open: boolean;
    handleClose: (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
}

const Notification: React.FC<NotificationProps> = ({ message, open, handleClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={() => handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        />
    );
};

export default Notification;
