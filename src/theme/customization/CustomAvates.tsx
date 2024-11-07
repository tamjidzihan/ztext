import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string: string) {
    let hash = 0;
    let i;


    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }


    return color;
}

function stringAvatar(name: string) {
    const nameParts = name.split(' ');
    const initials = nameParts.length > 1
        ? `${nameParts[0][0]}${nameParts[1][0]}`
        : `${nameParts[0][0]}`;

    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: initials,
    };
}


interface CustomAvaterProps {
    avatar: string;
}

export default function CustomAvater({ avatar }: CustomAvaterProps) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar {...stringAvatar(avatar)} />
        </Stack>
    );
}
