import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { AppWrapper } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
