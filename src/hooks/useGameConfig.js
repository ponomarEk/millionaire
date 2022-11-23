import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import questions from '../questionsMock';
import moneyBoardData from '../moneyBoardMock';

const GameConfigContext = createContext({
  stageData: {
    earnedMoney: 0,
    questionNumber: 0,
  },
  questionNumber: 0,
  burgerOpened: false,
  areDisabledActions: false,
});

export const GameConfigProvider = ({ children }) => {
  const [stageData, setStageData] = useState({
    earnedMoney: 0,
    questionNumber: 0,
  });
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [areDisabledActions, setAreDisabledActions] = useState(false);

  const currentQuestion = useMemo(
    () => questions[stageData.questionNumber],
    [stageData.questionNumber]
  );

  const resetState = () => {
    setAreDisabledActions(false);
    setStageData({
      earnedMoney: 0,
      questionNumber: 0,
    });
  };

  const handleBurgerClose = () => {
    setBurgerOpened(false);
  };

  const handleBurgerOpen = () => {
    setBurgerOpened(true);
  };

  const preventAnswerClick = () => {
    setAreDisabledActions(true);
  };

  const onCorrectAnswer = () => {
    setStageData((prev) => ({
      earnedMoney: moneyBoardData.find(
        (curr) => curr.id === prev.questionNumber
      ).amount,
      questionNumber:
        prev.questionNumber < 11
          ? prev.questionNumber + 1
          : prev.questionNumber,
    }));
  };

  useEffect(() => {
    setAreDisabledActions(false);
  }, [stageData.questionNumber]);

  const values = {
    stageData,
    areDisabledActions,
    burgerOpened,
    currentQuestion,
    moneyBoardData,
    resetState,
    handleBurgerClose,
    handleBurgerOpen,
    preventAnswerClick,
    onCorrectAnswer,
  };

  return (
    <GameConfigContext.Provider value={values}>
      {children}
    </GameConfigContext.Provider>
  );
};

const useGameConfig = () => useContext(GameConfigContext);
export { useGameConfig };
