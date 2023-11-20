import { mainReducer } from "./mainSlice";
import { historyReducer } from "./historySlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const historyPersistConfig = {
  key: "history",
  storage,
  whitelist: ["historyData"],
};

const persistedHistoryReducer = persistReducer(historyPersistConfig, historyReducer);

export const store = configureStore({
  reducer: {
    history: persistedHistoryReducer,
    main: mainReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch;
