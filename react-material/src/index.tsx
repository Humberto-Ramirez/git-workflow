import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from 'assets/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
