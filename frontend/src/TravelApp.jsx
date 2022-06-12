import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouter } from "./routers/AppRouter"
import { lightTheme } from "./themes"

import { FlightProvider, UIProvider, FilterProvider, BusinessProvider, ServiceProvider } from "./context"

export const TravelApp = () => {
    return (
        <FlightProvider>
            <BusinessProvider>
                <ServiceProvider>
                    <FilterProvider>
                        <UIProvider>
                            <ThemeProvider theme={ lightTheme }>
                                <CssBaseline />
                                <AppRouter />
                            </ThemeProvider>
                        </UIProvider>
                    </FilterProvider>
                </ServiceProvider>
            </BusinessProvider>
        </FlightProvider>
    )
}
