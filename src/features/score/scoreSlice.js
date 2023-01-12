import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	player1: 0,
	player2: 0,
};

export const scoreSlice = createSlice({
	name: 'score',
	initialState,
	reducers: {
		incrementP1: (state) => {
			state.player1 += 1;
		},
		incrementP2: (state) => {
			state.player2 += 1;
		},
		reset: (state) => {
			state.player1 = initialState.player1;
			state.player2 = initialState.player2;
		},
	},
});

// Action creators are generated for each case reducer function
export const { incrementP1, incrementP2, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
