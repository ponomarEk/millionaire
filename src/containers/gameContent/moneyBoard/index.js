import { GameButton } from '../../../components';
import { useGameConfig } from '../../../hooks/useGameConfig';
import { GAME_BUTTON_TYPES } from '../../../constants';
import closeIcon from '../../../assets/images/close.png';
import './index.scss';

const MoneyBoard = () => {
  const { moneyBoardData, burgerOpened, handleBurgerClose } = useGameConfig();

  return (
    <div className={`money-board ${burgerOpened && 'money-board_active'}`}>
      <div className="money-board__icon-wrapper" onClick={handleBurgerClose}>
        <img className="money-board__icon" src={closeIcon} alt="" />
      </div>
      <div className="money-board__items">
        {moneyBoardData.map((curr) => (
          <GameButton
            key={curr.id}
            type={GAME_BUTTON_TYPES.SMALL}
            buttonText={curr.amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0
            })}
            id={curr.id}
          />
        ))}
      </div>
    </div>
  );
};

export { MoneyBoard };
