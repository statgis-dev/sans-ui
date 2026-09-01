import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../theme';
import '../theme/theme.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
