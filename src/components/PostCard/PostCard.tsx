import {
    MoreVert
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography
} from "@mui/material";
import { useState } from "react";
import Email from "./Email";
import PostCardModel from "./ModelPostCard";
import Password from "./Password";
import UserName from "./UserName";

interface EmailCardProps {
    email: string;
    password: string;
    userName: string;
}

export const PostCard = ({ email, password, userName }: EmailCardProps) => {
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
                    avatar={<Avatar aria-label="recipe" onClick={handleOpen}>T</Avatar>}
                    action={<IconButton aria-label="settings"><MoreVert /></IconButton>}
                    title={<Typography onClick={handleOpen}>Software Technologies</Typography>}
                    subheader="TypeScript"
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
                open={open}
                handleClose={handleClose}
                email={email}
                password={password}
            />
        </>
    );
};
