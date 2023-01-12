import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	player1: 'X',
	player2: 'O',
};

export const iconSlice = createSlice({
	name: 'icon',
	initialState,
	reducers: {
		invert: (state) => {
			state.player1 = state.player1 === 'X' ? 'O' : 'X';
			state.player2 = state.player2 === 'X' ? 'O' : 'X';
		},
	},
});

// Action creators are generated for each case reducer function
export const { invert } = iconSlice.actions;

export default iconSlice.reducer;
