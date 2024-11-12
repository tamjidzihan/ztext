import { useEffect, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { AuthInfoProps, useDB } from "../hooks/useFirebase";
import { useAuth } from "../hooks/useAuth";

interface EditAuthInfoPageProps {
    authInfoId: string;
    onClose: () => void;
    addNewAuthInfos: (newAuthinfo: AuthInfoProps) => void;
}

const EditAuthInfoPage = ({ authInfoId, onClose, addNewAuthInfos }: EditAuthInfoPageProps) => {
    const { user } = useAuth();
    const { getAuthInfoById, updateAuthInfo } = useDB();
    const [loading, setLoading] = useState(true);
    const [authInfo, setAuthInfo] = useState<AuthInfoProps | null>(null);

    useEffect(() => {

        // Fetch auth info if user is authenticated
        const fetchAuthInfo = async () => {
            try {
                const data = await getAuthInfoById(authInfoId);
                setAuthInfo(data);
            } catch (error) {
                console.error("Error fetching auth info:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, authInfoId, setAuthInfo]);


    const handleSave = async () => {
        if (authInfo) {
            try {
                await updateAuthInfo(authInfoId, authInfo);
                addNewAuthInfos(authInfo); // Pass the updated authInfo back to parent
                onClose(); // Close modal after saving
            } catch (error) {
                console.error("Error updating auth info:", error);
            }
        }
    };


    if (loading && !authInfo) {
        return <CircularProgress />;
    }

    if (!authInfo) {
        return <CircularProgress />;
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
