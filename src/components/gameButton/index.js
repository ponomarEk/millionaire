import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

const GameButton = ({
	type,
	letter,
	buttonText,
	isCorrect,
	questionNumber,
	setQuestionNumber,
	id,
	onClickFunc,
	earnMoney,
	moneyBoardData,
}) => {
	const [className, setClassName] = useState('');
	const navigateTo = useNavigate();

	const handleClick = () => {
		setClassName('pending');
		onClickFunc();
		setTimeout(() => {
			isCorrect ? setClassName('correct') : setClassName('incorrect');
		}, 1000);
	};

	useEffect(() => {
		if (questionNumber === id && type === 'small') {
			setClassName('current');
		} else if (questionNumber > id && type === 'small') {
			setClassName('disable');
		}
	}, [questionNumber, id, type]);

	useEffect(() => {
		if (className === 'correct' && type === 'large') {
			setTimeout(() => {
				earnMoney(moneyBoardData.find(curr => curr.id === id).amount);
				id < 12 ? setQuestionNumber(currId => currId + 1) : navigateTo('/end');
				setClassName('');
			}, 3000);
		} else if (className === 'incorrect' && type === 'large') {
			setTimeout(() => {
				navigateTo('/end');
				setClassName('');
			}, 3000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [className, id, type]);

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
						{type === 'large' && (
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

export default GameButton;
