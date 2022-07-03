import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        kayak: {
            light: '#2e86c1',
            main: '#2e86c1',
            dark: '#2e86c1',
            contrastText: '#fff',
        },

        whatsapp: {
            light: '#229954',
            main: '#229954',
            dark: '#229954',
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