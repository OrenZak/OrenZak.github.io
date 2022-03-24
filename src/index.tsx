import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R11LR1Y4C6"></script>
        <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-R11LR1Y4C6');`}

        </script>
      </Helmet>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
