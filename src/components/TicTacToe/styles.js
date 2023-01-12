import styled from 'styled-components';

export const Wrapper = styled.table`
	width: 70vw;
	height: auto;
	margin: 0 auto;
	align-self: center;
	display: flex;
	justify-content: center;
`;

export const TableStyled = styled.tbody`
	position: relative;
	align-self: center;
	margin: auto;
	border-radius: 10px;
	background-color: black;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 10px;
	padding: 10px;

	td {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
	}
	button {
		width: 200px;
		height: 200px;
		overflow: hidden;
		background-color: white;
		font-size: large;
		color: black;
		text-align: center;
		font-size: 80px;
		padding: 0;
	}
`;

export const PlayAgain = styled.button`
	margin: 2rem 0;
	width: 300px;
	height: 60px;
	align-self: center;
	outline: none;
	border: none;
	:focus {
		outline: none;
	}
`;
export const PlayerTurn = styled.div`
	display: flex;
	align-items: flex-start;
	width: 80%;
	margin: 0 auto;
`;
