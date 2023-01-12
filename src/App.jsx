import styled from 'styled-components';
import { Provider } from 'react-redux';

import { Game, Dashboard, Title } from './components';

import { store } from './store';

const AppStyled = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
	color: white;
`;

function App() {
	return (
		<Provider store={store}>
			<AppStyled>
				<Title />
				<Dashboard />
				<Game />
			</AppStyled>
		</Provider>
	);
}

export default App;
