import { exampleApi } from '@global/api/example.api';

import { configureStore } from '@reduxjs/toolkit';

import { ModalReducer as modalReducer } from './slices/modal.slice';
import { UserReducer as userReducer } from './slices/user.slice';

export const store = configureStore({
  reducer: {
    modalReducer,
    userReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exampleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
