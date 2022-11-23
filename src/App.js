import { Route, Routes } from 'react-router-dom';

import { EndPage, GameContent, StartPage } from './containers';
import { ROUTE_PATHS } from './constants';

import './App.scss';

const ROUTES = [
  { path: ROUTE_PATHS.START, element: <StartPage /> },
  { path: ROUTE_PATHS.GAME, element: <GameContent /> },
  { path: ROUTE_PATHS.END, element: <EndPage /> },
];

const App = () => {
  return (
    <div className="app">
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </div>
  );
};

export { App };
