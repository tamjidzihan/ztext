import {
    Card,
    Box,
    IconButton,
    CardHeader,
    Avatar,
    CardContent,
    Typography,
    Collapse
} from "@mui/material";
import {
    FavoriteBorderRounded,
    ShareOutlined,
    MoreVert
} from "@mui/icons-material";


export const InteractiveCard = () => {

    return (
        <Card sx={{ maxWidth: 400, width: "100%", borderRadius: '20px' }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        T
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Software Technologies"
                subheader="TypeScript"
            />
            <CardContent>
                <Typography>
                    TypeScript code converts to JavaScript, which runs anywhere JavaScript
                    runs: In a browser, on Node.js or Deno and in your apps
                </Typography>
                <Collapse timeout="auto" unmountOnExit>
                    <Typography>
                        TypeScript stands in an unusual relationship to JavaScript.
                        TypeScript offers all of JavaScript’s features, and an additional
                        layer on top of these: TypeScript’s type system. For example,
                        JavaScript provides language primitives like string and number, but
                        it doesn’t check that you’ve consistently assigned these. TypeScript
                        does.
                    </Typography>
                </Collapse>
            </CardContent>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                    mt: "1rem"
                }}
            >
                <Box>
                    <IconButton>
                        <FavoriteBorderRounded />
                    </IconButton>
                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
};
