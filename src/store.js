import { configureStore } from '@reduxjs/toolkit';

import scoreSlice from './features/score/scoreSlice';
import iconSlice from './features/icon/iconSlice';

export const store = configureStore({
	reducer: {
		score: scoreSlice,
		icon: iconSlice,
	},
});
