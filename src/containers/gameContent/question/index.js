import { useEffect, useState } from 'react';

import GameButton from '../../../components/gameButton';
import burger from '../../../assets/images/burger.png';

import './index.scss';

const Question = ({
	handleBurgerClick,
	question,
	setQuestionNumber,
	earnMoney,
	moneyBoardData,
}) => {
	const { questionText, answers, id } = question;
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		setIsDisabled(false);
	}, [id]);

	return (
		<div className='question'>
			<div className='question__icon-wrapper' onClick={handleBurgerClick}>
				<img className='question__icon' src={burger} alt='' />
			</div>
			<div className='question__text-block'>
				<p className='question__text'>{questionText}</p>
			</div>
			<div className={`question__buttons ${isDisabled && 'disabled'}`}>
				{answers.map((curr, i) => {
					return (
						<GameButton
							key={i}
							id={id}
							type='large'
							letter={curr.letter}
							isCorrect={curr.correct}
							buttonText={curr.text}
							setQuestionNumber={setQuestionNumber}
							onClickFunc={() => setIsDisabled(true)}
							earnMoney={earnMoney}
							moneyBoardData={moneyBoardData}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Question;
