import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, type ThemeConfig } from '@/theme';

import { App } from './App';

import '@/theme/theme.css';
import '@fontsource/montserrat';
import '@fontsource/slabo-13px';
import 'maplibre-gl/dist/maplibre-gl.css';

const customTheme: ThemeConfig = {
    radius: "sharp",
    density: "compact",
    elevation: "high-contrast",
    colors: {
        primary: "#7cb46b",
        secondary: "#f75590",
    },
    fonts: {
        sans: "'Slabo 13px', Roboto, Helvetica, Arial, sans-serif",
        display: "'Andada Pro', Roboto, Helvetica, Arial, sans-serif",
    }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='dark' config={customTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)