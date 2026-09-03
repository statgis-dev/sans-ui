import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, type ThemeConfig } from '../theme';
import '../theme/theme.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { App } from './App';
import '@fontsource/montserrat';
import '@fontsource/andada-pro';
import '@fontsource/slabo-13px';

const customTheme: ThemeConfig = {
  radius: "sharp",
  density: "compact",
  elevation: "high-contrast",
  colors: {
    primary: "#023e8a",
    secondary: "#f75590",
  },
  fonts: {
    sans: "'Slabo 13px'",
    display: "'Andada Pro'",
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" config={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
