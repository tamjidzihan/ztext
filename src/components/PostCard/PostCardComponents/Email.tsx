import { ContentCopyOutlined } from '@mui/icons-material'
import { Box, IconButton, TextField, Tooltip } from '@mui/material'
import { useState } from 'react';

interface EmailProps {
    email: string
}

const Email = ({ email }: EmailProps) => {
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
    )
}

export default Email
