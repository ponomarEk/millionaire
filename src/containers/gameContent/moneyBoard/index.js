import GameButton from '../../../components/gameButton';
import close from '../../../assets/images/close.png';
import { makeUniqueKey } from '../../../utils';
import './index.scss';

const MoneyBoard = ({
  handleBurgerClose,
  data,
  questionNumber,
  burgerOpened,
}) => {
  return (
    <div className={`money-board ${burgerOpened && 'money-board_active'}`}>
      <div className="money-board__icon-wrapper" onClick={handleBurgerClose}>
        <img className="money-board__icon" src={close} alt="" />
      </div>
      <div className="money-board__items">
        {data.map((curr, i) => {
          return (
            <GameButton
              key={makeUniqueKey()}
              type="small"
              buttonText={curr.amount}
              id={curr.id}
              questionNumber={questionNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoneyBoard;
