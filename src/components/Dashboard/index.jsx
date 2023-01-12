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
	@media screen and (max-width: 768px) {
		width: 130px;
		height: 36px;
		font-size: 16px;
		padding: 1%;
	}
`;
const DashboardStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 10px auto;
	border-radius: 10px;
	width: 60%;
	padding: 10px 0;

	h2 {
		padding: 0;
		margin: 0;
	}
`;

const Score = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: space-around;
	margin: 0 auto;
`;
const Plate = styled.span`
	background-color: black;
	color: white;
	width: 22px;
	height: 22px;
	align-self: center;
	text-align: center;
`;

const ScoreWrapperLeft = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 6px;
	width: 140px;
`;
const ScoreWrapperRight = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 6px;
	width: 140px;
`;

export const Dashboard = () => {
	const score = useSelector((state) => state.score);
	const dispatch = useDispatch();
	return (
		<DashboardStyle>
			<h2>Score</h2>
			<Score>
				<ScoreWrapperLeft>
					<p>PLAYER</p>
					<Plate>{score.player1} </Plate>
				</ScoreWrapperLeft>
				<ScoreWrapperRight>
					<Plate>{score.player2} </Plate>
					<p>COMPUTER</p>
				</ScoreWrapperRight>
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
