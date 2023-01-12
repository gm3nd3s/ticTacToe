import { configureStore } from '@reduxjs/toolkit';

import scoreSlice from './features/score/scoreSlice';

export const store = configureStore({
	reducer: {
		score: scoreSlice,
	},
});
