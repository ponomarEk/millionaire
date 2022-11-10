import { Route, Routes } from 'react-router-dom';

import StartPage from './containers/startPage';
import EndPage from './containers/endPage';
import GameContent from './containers/gameContent';

import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/game' element={<GameContent />} />
				<Route path='/end' element={<EndPage />} />
			</Routes>
		</div>
	);
};

export default App;
