import { ContentCopyOutlined, MoreVert, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, IconButton, Modal, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";

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

const PostCardModel: React.FC<PostCardModelProps> = ({ open, handleClose, email, password }) => {
    const [copied, setCopied] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleCopy = async (item: string) => {
        try {
            await navigator.clipboard.writeText(item);
            setCopied(item);
            setTimeout(() => setCopied(null), 2000);
        } catch (error) {
            console.error("Failed to copy text", error);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };



    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"

        >
            <Box sx={modalStyle}>
                <Card
                    sx={{
                        borderRadius: '20px',
                        '&:hover': {
                            bgcolor: 'action.hover'
                        }
                    }}
                >
                    <CardHeader
                        avatar={<Avatar aria-label="recipe">T</Avatar>}
                        action={<IconButton aria-label="settings"><MoreVert /></IconButton>}
                        title="Software Technologies"
                        subheader="TypeScript"
                    />

                    <CardContent>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    value={email}
                                    slotProps={{
                                        input: { readOnly: true },
                                    }}
                                    id="input-email"
                                    label="Email"
                                    variant="standard"
                                />
                                <Tooltip title={copied === email ? "Copied!" : "Copy Email"} arrow>
                                    <IconButton onClick={() => handleCopy(email)} color="primary" aria-label="copy email">
                                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </CardContent>

                    <CardContent>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    value={password}
                                    type={passwordVisible ? "text" : "password"}
                                    slotProps={{
                                        input: { readOnly: true },
                                    }}
                                    id="input-password"
                                    label="Password"
                                    variant="standard"
                                />
                                <Tooltip title={copied === password ? "Copied!" : "Copy Password"} arrow>
                                    <IconButton onClick={() => handleCopy(password)} color="primary" aria-label="copy password">
                                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                                    </IconButton>
                                </Tooltip>
                                <IconButton onClick={togglePasswordVisibility} color="primary" aria-label="toggle password visibility">
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Box>
                        </Box>
                    </CardContent>


                    <CardContent>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    value={email}
                                    slotProps={{
                                        input: { readOnly: true },
                                    }}
                                    id="input-email"
                                    label="Email"
                                    variant="standard"
                                />
                                <Tooltip title={copied === email ? "Copied!" : "Copy Email"} arrow>
                                    <IconButton onClick={() => handleCopy(email)} color="primary" aria-label="copy email">
                                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </CardContent>

                    <CardContent>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    value={password}
                                    type={passwordVisible ? "text" : "password"}
                                    slotProps={{
                                        input: { readOnly: true },
                                    }}
                                    id="input-password"
                                    label="Password"
                                    variant="standard"
                                />
                                <Tooltip title={copied === password ? "Copied!" : "Copy Password"} arrow>
                                    <IconButton onClick={() => handleCopy(password)} color="primary" aria-label="copy password">
                                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                                    </IconButton>
                                </Tooltip>
                                <IconButton onClick={togglePasswordVisibility} color="primary" aria-label="toggle password visibility">
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Box>
                        </Box>
                    </CardContent>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row-reverse",
                            m: "0  1rem  1rem"
                        }}
                    >
                    </Box>
                    <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>

                </Card>
            </Box>
        </Modal>
    );
}
export default PostCardModel;
