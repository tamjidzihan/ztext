import { useState } from "react";
import {
    Card,
    Box,
    IconButton,
    CardHeader,
    Avatar,
    CardContent,
    Tooltip,
    TextField
} from "@mui/material";
import {
    MoreVert,
    ContentCopyOutlined,
    Visibility,
    VisibilityOff,
    DriveFileRenameOutline
} from "@mui/icons-material";
import PostCardModel from "./ModelPostCard";

interface EmailCardProps {
    email: string;
    password: string;
}

export const PostCard = ({ email, password }: EmailCardProps) => {
    const [copied, setCopied] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [open, setOpen] = useState(false);

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Card
                sx={{
                    maxWidth: 400,
                    width: "100%",
                    borderRadius: '20px',
                    '&:hover': {
                        cursor: 'pointer',
                        bgcolor: 'action.hover'
                    }
                }} >
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

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row-reverse",
                        m: "0  1rem  1rem"
                    }}
                >
                    <Box>
                        <IconButton>
                            <DriveFileRenameOutline onClick={handleOpen} />
                        </IconButton>
                    </Box>
                </Box>
            </Card>

            {/* Modal Component */}
            <PostCardModel
                open={open}
                handleClose={handleClose}
                email={email}
                password={password}
            />
        </>
    );
};
