import { Box, Button, Card, CardContent, CardHeader, Modal, Typography } from "@mui/material";
import React from "react";
import CustomAvater from "../../theme/customization/CustomAvates";
import { PostCardProps } from "./PostCard";
import Email from "./PostCardComponents/Email";
import Password from "./PostCardComponents/Password";
import UserName from "./PostCardComponents/UserName";
import OtherInfo from "./PostCardComponents/OtherInfo";
import SettingsMenu from "./PostCardComponents/SettingsMenu";

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "20px"
};

interface PostCardModelProps extends PostCardProps {
    open: boolean;
    handleClose: () => void;
}

const PostCardModel: React.FC<PostCardModelProps> = ({ open, handleClose, email, password, userName, catagory, website, otherInfo, onDelete }) => {

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
                        },
                        p: 2
                    }}
                >
                    <CardHeader avatar={<CustomAvater avatar={website} />}
                        action={
                            <SettingsMenu
                                onEdit={() => console.log("Edit clicked")}
                                onDelete={onDelete}
                            />
                        }
                        title={<Typography variant="h5">{website}</Typography>}
                        subheader={catagory}
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

                    <CardContent>
                        <OtherInfo otheInfo={otherInfo} />
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
                        <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
                    </Box>

                </Card>
            </Box>
        </Modal>
    );
}
export default PostCardModel;
