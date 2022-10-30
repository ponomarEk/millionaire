import { useNavigate } from 'react-router-dom';

import './index.scss';

const Button = ({ buttonText, path, onClick }) => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    typeof onClick === 'function' && onClick();
    navigateTo(path);
  };
  return (
    <div className="button" onClick={handleClick}>
      <p className="button__text">{buttonText}</p>
    </div>
  );
};

export default Button;
