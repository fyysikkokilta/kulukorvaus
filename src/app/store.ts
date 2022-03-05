import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import reimbursementReducer from '../features/reimbursement/reimbursementSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // reimbursement: reimbursementReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
