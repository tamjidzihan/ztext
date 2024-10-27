import { Box, } from '@mui/material'
import { AppProvider } from '@toolpad/core'
import { Mosaic } from 'react-loading-indicators'
import { CustomTheme } from '../theme/Theme'

const Loading = () => {
    return (
        <>
            <AppProvider
                theme={CustomTheme}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
                </Box>

            </AppProvider >
        </>
    )
}

export default Loading
