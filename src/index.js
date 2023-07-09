import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';

import routes from './routes';

import AppContextWrapper from './AppContextWrapper'

const router = createBrowserRouter(routes);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextWrapper >
      <RouterProvider router={router} />
    </AppContextWrapper>
  </StrictMode>
);
