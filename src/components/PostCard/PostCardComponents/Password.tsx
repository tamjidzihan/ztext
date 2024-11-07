import { ContentCopyOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, IconButton, TextField, Tooltip } from '@mui/material'
import { useState } from 'react'


interface PasswordProps {
    password: string
}


const Password = ({ password }: PasswordProps) => {
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
    )
}

export default Password
