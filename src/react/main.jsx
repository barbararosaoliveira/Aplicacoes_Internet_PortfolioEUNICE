import React from 'react';
import { createRoot } from 'react-dom/client';
import SuggestActivityForm from './SuggestActivityForm.jsx';

createRoot(document.getElementById('react-form-root')).render(
  <React.StrictMode>
    <SuggestActivityForm />
  </React.StrictMode>
);
