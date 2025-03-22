import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
 );
