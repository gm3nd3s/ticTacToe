import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementP1, incrementP2 } from '../../features/score/scoreSlice';

import { Wrapper, TableStyled, PlayAgain, PlayerTurn } from './styles';

let combinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const Game = () => {
	const [player1, setPlayer1] = useState(true);
	const [boardMoves, setBoardMoves] = useState(Array(9).fill(''));
	const score = useSelector((state) => state.score);
	const dispatch = useDispatch();

	useEffect(() => {
		resetBoard();
	}, [score.player1, score.player2]);

	useEffect(() => {
		if (!player1) {
			const timer = setTimeout(() => {
				computerPlay();
				verifyWinner();
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, [player1]);

	const verifyNull = () => {
		for (let index = 0; index < boardMoves.length; index++) {
			if (boardMoves[index] !== 'X' && boardMoves[index] !== 'O') return true;
		}
		return false;
	};
	const computerPlay = () => {
		if (!verifyNull()) {
			resetBoard();
			return;
		}

		let temp = [...boardMoves];
		const random = getRandomInt(boardMoves.length);

		if (boardMoves[random] === '') {
			temp[random] = 'O';
			setBoardMoves(temp);
			setPlayer1(!player1);
		} else {
			computerPlay();
		}
	};

	const resetBoard = () => {
		setPlayer1(true);
		setBoardMoves(Array(9).fill(''));
	};

	const verifyWinner = () => {
		combinations.forEach((combo) => {
			if (boardMoves[combo[0]] === 'X' && boardMoves[combo[1]] === 'X' && boardMoves[combo[2]] === 'X') {
				dispatch(incrementP1());
				resetBoard();
			}
			if (boardMoves[combo[0]] === 'O' && boardMoves[combo[1]] === 'O' && boardMoves[combo[2]] === 'O') {
				dispatch(incrementP2());
				resetBoard();
			}
		});
	};

	const handleClick = (i) => {
		if (player1) {
			if (boardMoves[i] !== '') {
				alert('square is already played');
				return;
			} else {
				let temp = [...boardMoves];
				temp[i] = player1 ? 'X' : 'O';
				setBoardMoves(temp);
				setPlayer1(!player1);
				verifyWinner();
			}
		} else {
			computerPlay();
			setPlayer1(!player1);
			verifyWinner();
		}
	};

	const Square = ({ index }) => {
		return <button onClick={() => handleClick(index)}>{boardMoves[index]}</button>;
	};

	return (
		<>
			<Wrapper>
				<TableStyled>
					<tr>
						<td>
							<Square index={0} />
							<Square index={1} />
							<Square index={2} />
						</td>
					</tr>
					<tr>
						<td>
							<Square index={3} />
							<Square index={4} />
							<Square index={5} />
						</td>
					</tr>
					<tr>
						<td>
							<Square index={6} />
							<Square index={7} />
							<Square index={8} />
						</td>
					</tr>
				</TableStyled>
				<PlayerTurn>
					<p>Player turn: {player1 ? 'Player' : 'Computer'}</p>
				</PlayerTurn>
			</Wrapper>
			<PlayAgain onClick={resetBoard}>Let's play again!</PlayAgain>
		</>
	);
};
