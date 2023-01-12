import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { reset } from '../../features/score/scoreSlice';
const Reset = styled.button`
	position: relative;
	border-radius: 10px;
	width: 130px;
	height: 40px;
	text-align: center;
	outline: none;
	border: none;
	:focus {
		outline: none;
	}
`;
const DashboardStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;
`;
const Score = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

export const Dashboard = () => {
	const score = useSelector((state) => state.score);
	const dispatch = useDispatch();
	return (
		<DashboardStyle>
			<h2>Score</h2>
			<Score>
				<p>{`Player 1: ${score.player1} `}</p>
				<p>{`Player 2: ${score.player2} `}</p>
			</Score>
			<Reset
				onClick={() => {
					dispatch(reset());
				}}>
				Reset score
			</Reset>
		</DashboardStyle>
	);
};
