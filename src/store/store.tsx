import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import translateSlice from './slices/translateSlice';
import closeFormSlice from './slices/formSlice';
import uiSlice from './slices/uiSlice';
import skillSetSlice from './slices/skillSetSlice';

const store = configureStore({
  reducer: {
    translate : translateSlice.reducer,
    closeForm : closeFormSlice.reducer,
    ui : uiSlice.reducer,
    skillSet : skillSetSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch