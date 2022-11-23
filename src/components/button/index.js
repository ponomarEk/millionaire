import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '../../constants';
import { useGameConfig } from '../../hooks/useGameConfig';
import './index.scss';

const Button = () => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const { resetState } = useGameConfig();

  const isEndPage = pathname === ROUTE_PATHS.END;

  const handleClick = () => {
    if (isEndPage) {
      resetState();
      navigateTo(ROUTE_PATHS.START);
    } else {
      navigateTo(ROUTE_PATHS.GAME);
    }
  };

  return (
    <div className="button" onClick={handleClick}>
      <p className="button__text">{isEndPage ? 'Try again' : 'Start'}</p>
    </div>
  );
};

export { Button };
