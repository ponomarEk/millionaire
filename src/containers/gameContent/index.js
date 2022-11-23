import { MoneyBoard } from './moneyBoard';
import { Question } from './question';

import './index.scss';

const GameContent = () => {
  return (
    <div className="game-content">
      <Question />
      <MoneyBoard />
    </div>
  );
};

export { GameContent };
