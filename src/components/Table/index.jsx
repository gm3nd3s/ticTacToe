import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { invert } from '../../features/icon/iconSlice';
import { incrementP1, incrementP2 } from '../../features/score/scoreSlice';

import { Wrapper, TableStyled, PlayAgain, PlayerTurn, PlayerChoice, Icon, SmallIcon } from './styles';

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
	const icon = useSelector((state) => state.icon);
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

	const changeIcon = () => {
		dispatch(invert());
		resetBoard();
	};
	const verifyNull = () => {
		for (let index = 0; index < boardMoves.length; index++) {
			if (boardMoves[index] !== 'X' && boardMoves[index] !== 'O') return true;
		}
		return false;
	};

	const resetBoard = () => {
		setPlayer1(true);
		setBoardMoves(Array(9).fill(''));
	};

	const verifyWinner = () => {
		combinations.forEach((combo) => {
			if (
				boardMoves[combo[0]] === icon.player1 &&
				boardMoves[combo[1]] === icon.player1 &&
				boardMoves[combo[2]] === icon.player1
			) {
				resetBoard();
				dispatch(incrementP1());
			}
			if (
				boardMoves[combo[0]] === icon.player2 &&
				boardMoves[combo[1]] === icon.player2 &&
				boardMoves[combo[2]] === icon.player2
			) {
				resetBoard();
				dispatch(incrementP2());
			}
		});
	};

	const computerPlay = () => {
		if (!verifyNull()) {
			resetBoard();
			return;
		}

		let temp = [...boardMoves];
		const random = getRandomInt(boardMoves.length);

		if (boardMoves[random] === '') {
			temp[random] = icon.player2;
			setBoardMoves(temp);
			setPlayer1(!player1);
			verifyWinner();
		} else {
			computerPlay();
		}
	};

	const handleClick = (i) => {
		if (player1) {
			if (boardMoves[i] !== '') {
				alert('square is already played');
				return;
			} else {
				let temp = [...boardMoves];
				temp[i] = player1 ? icon.player1 : icon.player2;
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
				<PlayerChoice>
					<tr>
						<td>
							<p>Choose your icon</p>
						</td>
						<td>
							<Icon>{icon.player1}</Icon>
						</td>
						<td>
							<SmallIcon onClick={() => changeIcon()}>{icon.player2}</SmallIcon>
						</td>
					</tr>
				</PlayerChoice>
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
					<tr>
						<td>
							<p>Player turn: {player1 ? 'Player' : 'Computer'}</p>
						</td>
					</tr>
				</PlayerTurn>
			</Wrapper>
			<PlayAgain onClick={resetBoard}>Reset board</PlayAgain>
		</>
	);
};
