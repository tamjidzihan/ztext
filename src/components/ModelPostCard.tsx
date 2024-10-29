import React from "react";
import { Box, Typography, Button, Modal } from "@mui/material";

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface PostCardModelProps {
    open: boolean;
    handleClose: () => void;
    email: string;
    password: string;
}

const PostCardModel: React.FC<PostCardModelProps> = ({ open, handleClose, email, password }) => (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
                Email and Password Details
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
                Email: {email}
            </Typography>
            <Typography sx={{ mt: 1 }}>
                Password: {password}
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
        </Box>
    </Modal>
);

export default PostCardModel;
