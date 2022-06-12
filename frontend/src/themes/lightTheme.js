import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        kayak: {
            light: '#ff690f',
            main: '#ff690f',
            dark: '#ff690f',
            contrastText: '#fff',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: 'inherit'
            }
        }
    }
});