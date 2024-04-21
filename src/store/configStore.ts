import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as model from "./reducers";

const reducer = combineReducers({
  resize: model.reSizeSlice.reducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
