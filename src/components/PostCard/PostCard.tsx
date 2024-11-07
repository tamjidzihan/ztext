import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";
// import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import CustomAvater from "../../theme/customization/CustomAvates";
import PostCardModel from "./ModelPostCard";
import SettingsMenu from "./PostCardComponents/SettingsMenu";
import Email from "./PostCardComponents/Email";
import Password from "./PostCardComponents/Password";
import UserName from "./PostCardComponents/UserName";

export interface PostCardProps {
    website: string;
    email: string;
    password: string;
    userName: string;
    catagory: string;
    otherInfo: string;
    onDelete: () => void;
}

export const PostCard = ({ email, password, userName, website, catagory, otherInfo, onDelete }: PostCardProps) => {
    const [open, setOpen] = useState(false);

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
                        bgcolor: 'action.hover'
                    }
                }} >
                <CardHeader
                    avatar={
                        <Box onClick={handleOpen}>
                            <CustomAvater avatar={website} />
                        </Box>
                    }

                    action={
                        <SettingsMenu
                            onDelete={onDelete}
                        />
                    }
                    title={<Typography onClick={handleOpen} variant="h5">{website}</Typography>}
                    subheader={catagory}
                    sx={{ cursor: 'pointer' }}
                />

                <CardContent>
                    <UserName userName={userName} />
                </CardContent>
                <CardContent>
                    <Email email={email} />
                </CardContent>

                <CardContent>
                    <Password password={password} />
                </CardContent>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row-reverse",
                        m: "0  1rem  1rem",

                    }}
                >
                    <Box onClick={handleOpen}>
                        <Button>
                            More
                        </Button>
                    </Box>
                </Box>
            </Card>

            {/* Modal Component */}
            <PostCardModel
                catagory={catagory}
                website={website}
                userName={userName}
                email={email}
                password={password}
                otherInfo={otherInfo}
                open={open}
                handleClose={handleClose}
                onDelete={onDelete}
            />
        </>
    );
};
