import { useEffect } from 'react';

import GameButton from '../../../components/gameButton';
import close from '../../../assets/images/close.png';
import { makeUniqueKey } from '../../../utils';
import useGameConfig from '../../../hooks/useGameConfig';

import './index.scss';

const MoneyBoard = () => {
  const {
    moneyMock,
    burgerOpened,
    setBurgerOpened,
    setIsDisabledActions,
    questionNumber,
  } = useGameConfig();

  const handleBurgerClose = () => {
    setBurgerOpened(false);
  };

  useEffect(() => {
    setIsDisabledActions(false);
  }, [setIsDisabledActions, questionNumber]);

  return (
    <div className={`money-board ${burgerOpened && 'money-board_active'}`}>
      <div className="money-board__icon-wrapper" onClick={handleBurgerClose}>
        <img className="money-board__icon" src={close} alt="" />
      </div>
      <div className="money-board__items">
        {moneyMock.map((curr, i) => (
          <GameButton
            key={makeUniqueKey()}
            type="small"
            buttonText={curr.amount}
            id={curr.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoneyBoard;
