import background from '../../assets/images/background.png';
import handImg from '../../assets/images/hand.png';

import Button from '../button';

import './index.scss';

const Layout = ({ path, buttonText, resetEarnedMoney, children }) => {
  return (
    <>
      <img className="background" src={background} alt="" />
      <div className="layout">
        <div className="layout__content">
          <img className="layout__hand" src={handImg} alt="" />
          <div className="layout__button-group">
            <div className="layout__header">{children}</div>
            <Button buttonText={buttonText} path={path} onClick={resetEarnedMoney}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
