import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// in create react app this file is index.js
// in create react app this file is also importing index.css
// strict mode only runs on dev and renders everything twice;
// console.log() statemenst in components appear twice because of that
