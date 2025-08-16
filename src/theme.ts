'use client';

import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
    },
    typography: {
        fontFamily: 'var(--font-roboto), Roboto, system-ui, -apple-system, sans-serif',
    },
});


export default theme;