import { useLocation, useNavigate } from 'react-router-dom';

import useGameConfig from '../../hooks/useGameConfig';

import './index.scss';

const Button = () => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const { resetState } = useGameConfig();

  const isEndPage = pathname === '/end';

  const handleClick = () => {
    isEndPage && resetState();
    navigateTo(isEndPage ? '/' : '/game');
  };
  return (
    <div className="button" onClick={handleClick}>
      <p className="button__text">{isEndPage ? 'Try again' : 'Start'}</p>
    </div>
  );
};

export default Button;
	