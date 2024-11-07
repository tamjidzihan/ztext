import { ContentCopyOutlined } from '@mui/icons-material'
import { Box, IconButton, TextField, Tooltip } from '@mui/material'
import { useState } from 'react';

interface UserNameProps {
    userName: string
}

const UserName = ({ userName }: UserNameProps) => {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = async (item: string) => {
        try {
            await navigator.clipboard.writeText(item);
            setCopied(item);
            setTimeout(() => setCopied(null), 2000);
        } catch (error) {
            console.error("Failed to copy text", error);
        }
    };

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField
                    value={userName}
                    slotProps={{
                        input: { readOnly: true },
                    }}
                    id="input-userName"
                    label="UserName"
                    variant="standard"
                />
                <Tooltip title={copied === userName ? "Copied!" : "Copy username"} arrow>
                    <IconButton onClick={() => handleCopy(userName)} color="primary" aria-label="copy userName">
                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default UserName
