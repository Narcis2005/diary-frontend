import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "./slices/auth";

export function makeStore() {
    return configureStore({
      reducer: { user: userReducer}
    });
  }
export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
