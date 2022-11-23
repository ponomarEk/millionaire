import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './App';

import { GameConfigProvider } from './hooks/useGameConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameConfigProvider>
      <Router>
        <App />
      </Router>
    </GameConfigProvider>
  </React.StrictMode>
);
