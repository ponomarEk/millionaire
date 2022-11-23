import { GameButton } from '../../../components';

import { useGameConfig } from '../../../hooks/useGameConfig';
import { GAME_BUTTON_TYPES } from '../../../constants';
import burgerIcon from '../../../assets/images/burger.png';
import './index.scss';

const Question = () => {
  const { currentQuestion, areDisabledActions, handleBurgerOpen } =
    useGameConfig();

  const { id, questionText, answers } = currentQuestion;

  return (
    <div className="question">
      <div className="question__icon-wrapper" onClick={handleBurgerOpen}>
        <img className="question__icon" src={burgerIcon} alt="" />
      </div>
      <div className="question__text-block">
        <p className="question__text">{questionText}</p>
      </div>
      <div className={`question__buttons ${areDisabledActions && 'disabled'}`}>
        {answers.map((curr) => (
          <GameButton
            key={curr.text}
            id={id}
            type={GAME_BUTTON_TYPES.LARGE}
            letter={curr.letter}
            isCorrect={curr.correct}
            buttonText={curr.text}
          />
        ))}
      </div>
    </div>
  );
};

export { Question };
