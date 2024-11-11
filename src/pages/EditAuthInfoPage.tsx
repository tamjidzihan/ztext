import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { AuthInfoProps, useDB } from "../hooks/useFirebase"; // Assuming this hook allows you to fetch AuthInfo
// import { PostCardProps } from "../components/PostCard/PostCard"; // Assuming you use this interface for AuthInfo

interface EditAuthInfoPageProps {
    authInfoId: string;
    onClose: () => void;
}

const EditAuthInfoPage = ({ authInfoId, onClose }: EditAuthInfoPageProps) => {
    const { getAuthInfoById, updateAuthInfo } = useDB(); // Assuming you have this function in your useDB hook
    const [authInfo, setAuthInfo] = useState<AuthInfoProps | null>(null);

    useEffect(() => {
        // Fetch the AuthInfo data based on authInfoId
        const fetchAuthInfo = async () => {
            const data = getAuthInfoById(authInfoId);
            setAuthInfo(await data);
        };

        fetchAuthInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authInfoId]);

    const handleSave = () => {
        if (authInfo) {
            updateAuthInfo(authInfoId, authInfo); // Assuming this updates the data
            onClose(); // Close the edit page after saving
        }
    };

    if (!authInfo) {
        return <div>Loading...</div>; // Or display a loading spinner
    }

    return (
        <Box sx={{ p: 2 }}>
            <h2>Edit Authentication Info</h2>

            <TextField
                label="Website"
                value={authInfo.website}
                onChange={(e) => setAuthInfo({ ...authInfo, website: e.target.value })}
                fullWidth
                margin="normal"
            />

            <TextField
                label="User Name"
                value={authInfo.username}
                onChange={(e) => setAuthInfo({ ...authInfo, username: e.target.value })}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Email"
                value={authInfo.email}
                onChange={(e) => setAuthInfo({ ...authInfo, email: e.target.value })}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Password"
                value={authInfo.password}
                onChange={(e) => setAuthInfo({ ...authInfo, password: e.target.value })}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Other Info"
                value={authInfo.otherInfo}
                onChange={(e) => setAuthInfo({ ...authInfo, otherInfo: e.target.value })}
                fullWidth
                margin="normal"
            />

            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                <Button onClick={onClose} variant="outlined">
                    Cancel
                </Button>
                <Button onClick={handleSave} variant="contained">
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default EditAuthInfoPage;
