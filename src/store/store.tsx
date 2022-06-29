import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import translateSlice from './slices/translateSlice';
import closeFormSlice from './slices/closeFormSlice';
import uiSlice from './slices/uiSlice';
const store = configureStore({
  reducer: {
    translate : translateSlice.reducer,
    closeForm : closeFormSlice.reducer,
    ui : uiSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch