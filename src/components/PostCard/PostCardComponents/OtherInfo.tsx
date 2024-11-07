import { ContentCopyOutlined } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { useState } from 'react';
import { CustomTextareaAutosize } from '../../../theme/customization/CustomTextareaAutosize';

interface OtherInfoProps {
    otheInfo: string
}

const OtherInfo = ({ otheInfo }: OtherInfoProps) => {
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
            <Typography variant="body1" sx={{ mb: 1 }}>
                Other Informations
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <CustomTextareaAutosize
                    minRows={4}
                    style={{ width: '100%', padding: '8px' }}
                    name="otherInfo"
                    aria-label="otherInfo"
                    value={otheInfo}
                />
                <Tooltip title={copied === otheInfo ? "Copied!" : "Copy Info"} arrow>
                    <IconButton onClick={() => handleCopy(otheInfo)} color="primary" aria-label="copy info">
                        <ContentCopyOutlined sx={{ color: 'action.active' }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default OtherInfo
