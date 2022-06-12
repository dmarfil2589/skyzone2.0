import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouter } from "./routers/AppRouter"
import { lightTheme } from "./themes"

import { FlightProvider, UIProvider, FiterProvider } from "./context"

export const TravelApp = () => {
    return (
        <FlightProvider>
            <FiterProvider>
                <UIProvider>
                    <ThemeProvider theme={ lightTheme }>
                        <CssBaseline />
                        <AppRouter />
                    </ThemeProvider>
                </UIProvider>
            </FiterProvider>
        </FlightProvider>
    )
}
