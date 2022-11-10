import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import questions from '../questionsMock';
import moneyBoardData from '../moneyBoardMock';

const GameConfigContext = createContext({
  earnedMoney: '$ 0',
  questions: [],
  moneyBoardData: [],
  questionNumber: 1,
  burgerOpened: false,
  isDisabledActions: false,
});

export const GameConfigProvider = ({ children }) => {
  const [earnedMoney, setEarnedMoney] = useState('$ 0');
  const [questionsMock] = useState(questions);
  const [moneyMock] = useState(moneyBoardData);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [isDisabledActions, setIsDisabledActions] = useState(false);

  const resetState = useCallback(() => {
    setEarnedMoney('$ 0');
    setQuestionNumber(1);
  }, [setEarnedMoney, setQuestionNumber]);

  const memoedValues = useMemo(
    () => ({
      earnedMoney,
      setEarnedMoney,
      moneyMock,
      questionsMock,
      questionNumber,
      setQuestionNumber,
      resetState,
      burgerOpened,
      setBurgerOpened,
      isDisabledActions,
      setIsDisabledActions,
    }),

    [
      earnedMoney,
      setEarnedMoney,
      moneyMock,
      questionsMock,
      questionNumber,
      setQuestionNumber,
      resetState,
      burgerOpened,
      setBurgerOpened,
      isDisabledActions,
      setIsDisabledActions,
    ]
  );

  return (
    <GameConfigContext.Provider value={memoedValues}>
      {children}
    </GameConfigContext.Provider>
  );
};

const useGameConfig = () => useContext(GameConfigContext);
export default useGameConfig;
