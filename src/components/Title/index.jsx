import styled from 'styled-components';

const Wrapper = styled.header`
	display: flex;
	justify-content: center;

	h1 {
		margin: 20px 0;
	}
`;

export const Title = () => {
	return (
		<Wrapper>
			<h1>Tic Tac Toe</h1>
		</Wrapper>
	);
};
