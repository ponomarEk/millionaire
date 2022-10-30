import { useState } from 'react';

import questions from '../../questionsMock';
import moneyBoardData from '../../moneyBoardMock';

import MoneyBoard from './moneyBoard';
import Question from './question';

import './index.scss';

const GameContent = ({ earnMoney }) => {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleBurgerClick = () => {
    setBurgerOpened(true);
  };
  const handleBurgerClose = () => {
    setBurgerOpened(false);
  };

  return (
    <div className="game-content">
      <Question
        handleBurgerClick={handleBurgerClick}
        question={questions[questionNumber - 1]}
        setQuestionNumber={setQuestionNumber}
        earnMoney={earnMoney}
        moneyBoardData={moneyBoardData}
      />
      <MoneyBoard
        handleBurgerClose={handleBurgerClose}
        data={moneyBoardData}
        questionNumber={questionNumber}
        burgerOpened={burgerOpened}
      />
    </div>
  );
};

export default GameContent;
