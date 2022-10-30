import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import StartPage from './containers/startPage';
import EndPage from './containers/endPage';
import GameContent from './containers/gameContent';

import './App.scss';

const App = () => {
  const [earnedMoney, setEarnedMoney] = useState('$ 0');

  const earnMoney = amount => {
    setEarnedMoney(amount);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GameContent earnMoney={earnMoney} />} />
        <Route
          path="/end"
          element={<EndPage earnedMoney={earnedMoney} earnMoney={earnMoney} />}
        />
      </Routes>
    </div>
  );
};

export default App;
