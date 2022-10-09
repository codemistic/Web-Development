import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import client from './react-query-client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);