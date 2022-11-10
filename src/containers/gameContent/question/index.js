import GameButton from '../../../components/gameButton';

import burger from '../../../assets/images/burger.png';

import './index.scss';
import useGameConfig from '../../../hooks/useGameConfig';

const Question = () => {
  const { questionsMock, questionNumber, isDisabledActions, setBurgerOpened } =
    useGameConfig();

  const { id, questionText, answers } = questionsMock[questionNumber - 1];

  const handleBurgerClick = () => {
    setBurgerOpened(true);
  };

  return (
    <div className="question">
      <div className="question__icon-wrapper" onClick={handleBurgerClick}>
        <img className="question__icon" src={burger} alt="" />
      </div>
      <div className="question__text-block">
        <p className="question__text">{questionText}</p>
      </div>
      <div className={`question__buttons ${isDisabledActions && 'disabled'}`}>
        {answers.map((curr, i) => (
          <GameButton
            key={i}
            id={id}
            type="large"
            letter={curr.letter}
            isCorrect={curr.correct}
            buttonText={curr.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
