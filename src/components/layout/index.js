import backgroundImg from '../../assets/images/background.png';
import handImg from '../../assets/images/hand.png';

import { Button } from '../button';

import './index.scss';

const Layout = ({ children }) => {
  return (
    <>
      <img className="background" src={backgroundImg} alt="" />
      <div className="layout">
        <div className="layout__content">
          <img className="layout__hand" src={handImg} alt="" />
          <div className="layout__button-group">
            <div className="layout__header">{children}</div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
