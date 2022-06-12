import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouter } from "./routers/AppRouter"
import { lightTheme } from "./themes"

import { FlightProvider, UIProvider } from "./context"

export const TravelApp = () => {
    return (
        <FlightProvider>
            <UIProvider>
                <ThemeProvider theme={ lightTheme }>
                    <CssBaseline />
                    <AppRouter />
                </ThemeProvider>
            </UIProvider>
        </FlightProvider>
    )
}
