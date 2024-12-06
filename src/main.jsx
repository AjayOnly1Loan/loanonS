import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

// Create a custom theme with a generic cursive font
const theme = createTheme({
  typography: {
    fontFamily: `'Comic Sans MS', 'Brush Script MT', cursive`, // Use system cursive fonts
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
