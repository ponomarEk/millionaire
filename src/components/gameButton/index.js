import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  GAME_BUTTON_STYLE_TYPES,
  GAME_BUTTON_TYPES,
  ROUTE_PATHS,
} from '../../constants';
import { useGameConfig } from '../../hooks/useGameConfig';
import './index.scss';

const GameButton = ({ type, letter, buttonText, isCorrect, id }) => {
  const navigateTo = useNavigate();
  const [className, setClassName] = useState('');
  const { stageData, onCorrectAnswer, preventAnswerClick } = useGameConfig();

  const { CORRECT, INCORRECT, PENDING, DISABLED, CURRENT } =
    GAME_BUTTON_STYLE_TYPES;

  const handleClick = () => {
    setClassName(PENDING);
    preventAnswerClick(true);
    setTimeout(() => {
      setClassName(isCorrect ? CORRECT : INCORRECT);
    }, 1000);
  };

  useEffect(() => {
    if (type === GAME_BUTTON_TYPES.SMALL && id <= stageData.questionNumber) {
      setClassName(stageData.questionNumber === id ? CURRENT : DISABLED);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageData.questionNumber]);

  useEffect(() => {
    if (type === GAME_BUTTON_TYPES.LARGE) {
      setTimeout(() => {
        if (className === CORRECT) {
          onCorrectAnswer();
          stageData.questionNumber === 11 && navigateTo(ROUTE_PATHS.END);
        } else if (className === INCORRECT) {
          navigateTo(ROUTE_PATHS.END);
        }
      }, 3000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);

  return (
    <div
      className={`${type}-button ${type}-button_${className}`}
      onClick={handleClick}
    >
      <div
        className={`${type}-button__line  ${type}-button__line_${className}`}
      />
      <div
        className={`${type}-button__button-border ${type}-button__button-border_${className}`}
      >
        <div
          className={`${type}-button__button  ${type}-button__button_${className}`}
        >
          <p
            className={`${type}-button__text ${type}-button__text_${className}`}
          >
            {type === GAME_BUTTON_TYPES.LARGE && (
              <span style={{ color: '#FF8B37', marginRight: '8px' }}>
                {letter}
              </span>
            )}
            {buttonText}
          </p>
        </div>
      </div>
      <div
        className={`${type}-button__line ${type}-button__line_${className}`}
      />
    </div>
  );
};

export { GameButton };
