import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './api/user'
import authReducer from "./slices/common/auth";
import { itApi } from './api/it';
import { ceApi } from './api/ce';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [itApi.reducerPath]: itApi.reducer,
    [ceApi.reducerPath]: ceApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, itApi.middleware, ceApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)