import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
    import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary:{
            main: '#FF324DFF',
        },
        secondary :{
            main: '#000',
        },
        info: {
            main: '#fff',
        }
    }
});

root.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </BrowserRouter>
);

