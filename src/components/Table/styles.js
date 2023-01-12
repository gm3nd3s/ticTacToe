import styled from 'styled-components';

export const Wrapper = styled.table`
	width: fit-content;
	height: auto;
	margin: 0 auto;
	align-self: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const TableStyled = styled.tbody`
	position: relative;
	align-self: center;
	margin: auto;
	border-radius: 10px;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 10px;
	padding: 10px;
	background-color: darkgray;

	td {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
	}
	button {
		width: 200px;
		height: 200px;
		overflow: hidden;

		text-align: center;
		font-size: 80px;
		padding: 0;
	}
	@media screen and (max-width: 768px) {
		button {
			width: 100px;
			height: 100px;
			font-size: 60px;
		}
	}
	@media screen and (max-width: 425px) {
		button {
			width: 70px;
			height: 70px;
			font-size: 40px;
		}
	}
`;

export const PlayAgain = styled.button`
	margin: 10px 0;
	width: 300px;
	height: 60px;
	align-self: center;
	outline: none;
	border: none;
	:focus {
		outline: none;
	}
	@media screen and (max-width: 768px) {
		width: 200px;
		height: 50px;
	}
	@media screen and (max-width: 425px) {
		width: 160px;
		height: 40px;
	}
`;
export const PlayerTurn = styled.tfoot`
	display: flex;
	align-items: flex-start;
	width: 95%;
	margin: 0 auto;
`;

export const PlayerChoice = styled.thead`
	display: flex;
	justify-content: flex-start;
	height: 40px;
	gap: 10px;
	align-items: center;

	width: 95%;
	margin: 0 auto 10px auto;
`;

export const Icon = styled.button`
	width: 30px;
	height: 30px;
	border-radius: 4px;
	font-size: 16px;
	padding: 0;
	margin: 2px;
	outline: none;
	border: none;
	:focus {
		outline: none;
		border: none;
	}
	:hover {
		outline: none;
		border: none;
		cursor: default;
	}
`;
export const SmallIcon = styled.button`
	width: 24px;
	height: 24px;
	border-radius: 4px;
	font-size: 12px;
	padding: 0;
	margin: 2px;
	background-color: grey;
	:hover {
		border: 1px solid white;
		outline: white;
	}
	:focus {
		outline: white;
	}
`;
