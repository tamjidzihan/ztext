import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';

const SearchPage = () => {

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                    id="input-with-sx"
                    label="Search For Your Item Here..."
                    variant="standard" />
            </Box>
        </Box>
    )
}

export default SearchPage
