import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import translateSlice from './slices/translateSlice';

const store = configureStore({
  reducer: {
    translate : translateSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch