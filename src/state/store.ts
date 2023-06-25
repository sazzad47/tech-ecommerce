import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './api/user'
import authReducer from "./slices/common/auth";
import { itApi } from './api/it';
import { ceApi } from './api/ce';
import { gdApi } from './api/gd';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [itApi.reducerPath]: itApi.reducer,
    [ceApi.reducerPath]: ceApi.reducer,
    [gdApi.reducerPath]: gdApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, itApi.middleware, ceApi.middleware, gdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)