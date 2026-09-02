import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, type ThemeConfig } from '../theme';
import '../theme/theme.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { App } from './App';

const customTheme: ThemeConfig = {
  radius: "sharp",
  density: "compact",
  elevation: "high-contrast",
  fontScale: "sm",
  colors: {
    primary: "#D4AF37",
    secondary: "#FFC5D3",
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" config={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
