import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Crée un point d'ancrage pour le rendu de l'application dans l'élément HTML avec l'ID "root"
createRoot(document.getElementById('root')).render(
    // Active le mode Strict de React pour détecter les erreurs et avertissements en développement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
